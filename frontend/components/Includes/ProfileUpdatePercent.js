import Link from 'next/link';
import React from 'react';
import { api_url,driver_populate_url,getJwt } from '@/Constants';

export default class ProfileUpdatePercent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profile_completion_percentage: 0,
        color:'danger'
    };
}
  
 getLoggedInUserData = async ()=>{
    if(getJwt() === null) return 'logged-out' // you are looged out
    let url
    const user = await fetch(api_url+'/users/me',{
      headers: {
        'Authorization': `Bearer ${getJwt()}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
      //.catch(error => return 'logged-out')
     // get user first to check type, coz we don't know whether user is a driver or car owner
    if(user.type === 'driver') url = api_url+'/users/me/?'+driver_populate_url
    if(user.type === 'car-owner') url = api_url+'/users/me/?populate=carOwnerProfile,carOwnerProfile.details,carOwnerProfile.details.address,carOwnerProfile.details.profile_cover_image,carOwnerProfile.details.profile_thumbnail_image'
    
    return await fetch(url,{
      headers: {
        'Authorization': `Bearer ${getJwt()}`,
        'Content-Type': 'application/json'
      }
     }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
  }

updateUser = async (userId,profile_completion_percentage)=>{
   const updateObject = {id:userId,profile_completion_percentage:profile_completion_percentage}
   return await fetch(this.props.api_url+'/users/'+userId, {
    method: 'PUT',
    headers: {
     'Content-Type': 'application/json',
    Authorization: `Bearer ${this.props.jwt}`
    },
    body: JSON.stringify(updateObject),
  });
}

async componentDidMount(){
   const user = await this.getLoggedInUserData
   let profile_completion_percentage = user.profile_completion_percentage
   if(user.profile_completion_percentage === null) profile_completion_percentage = 0 
   console.log(user)
   return
   if(user.type === 'car-owner'){
      if(user.carOwnerProfile === null){
        this.setState({
            profile_completion_percentage: '9%',
            color:'danger', // red
            message:'This profile is too empty, please add some data, as it stands, you cannot create a job or get listed as a car owner'
        })
        this.updateUser()
        return
      }
   }
   else{// a driver
      if(user.driverProfile === null){
        this.setState({
            profile_completion_percentage:'3%',
            color: 'danger',
            message:'You have no profile yet, please add some information to your profile to activate account'
        })
        this.updateUser()
        return
      }
      const driverProfile = user.driverProfile
      if(driverProfile.details === null){
        this.setState({
            profile_completion_percentage:'5%',
            color: 'danger',
            message:'please add details like first and last name, phone number, about you, etc. In order to activate your profile'
        })
        this.updateUser()
        return
      }
      
      const profileDetails = driverProfile.details
      if(profileDetails.firstname === null || profileDetails.lastname === null){
        this.setState({
            profile_completion_percentage:'9%',
            color: 'danger',
            message:'please add a firstname and lastname to be listed as a driver'
        })
        this.updateUser()
        return
      }

      if(profileDetails.phone_number === null){
        this.setState({
            profile_completion_percentage:'9%',
            color: 'danger',
            message:'please add a number to start applying to jobs'
        })
        this.updateUser()
        return
      }
      if(profileDetails.age === null || profileDetails.gender === null){
        this.setState({
            profile_completion_percentage:'15%',
            color: 'warning',
            message:'Please add an age and a gender to stand out on profile and job listings'
        })
        this.updateUser()
        return
      }
      if(profileDetails.profile_cover_image === null || profileDetails.profile_thumbnail_image === null || profileDetails.about === null){
        this.setState({
            profile_completion_percentage:'20%',
            color: 'warning',
            message:'Please add a profile photo, cover photo and an about you to stand out on profile and job listings'
        })
        this.updateUser()
        return
      }
      if(driverProfile.address===null || driverProfile.nrc_front === null || driverProfile.nrc_back === null){
        this.setState({
            profile_completion_percentage:'30%',
            color: 'info',
            message:'please add an Address, and Nrc Front and Back photos to stand out on profile and job listing and potentially get verified by DriverBase'
        })
        this.updateUser()
        return
      }
      if(driverProfile.drivers_license_front === null || driverProfile.drivers_license_back === null || driverProfile.driving_certificate_front === null || driverProfile.driving_certificate_back === null){
        this.setState({
            profile_completion_percentage:'65%',
            color: 'info',
            message:'please add a profile photo and cover photo to stand out on profile and job listings'
        })
        this.updateUser()
        return
      }

    this.setState({
        profile_completion_percentage:'75%',
        color: 'success',
        message:'You have successfully updated your profile details to the highest percentage, you are now eligible to begin requesting to verification'
    })
    this.updateUser()
   }
}
render() {
    return (
        <div className={"alert alert-"+this.state.color}> <Link href='/profile'><p>{this.state.message}</p> <p>{'Your profile is only updated: '+this.state.profile_completion_percentage}</p></Link></div>
    );
}

}


