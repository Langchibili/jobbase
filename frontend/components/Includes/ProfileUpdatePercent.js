import Link from 'next/link';
import React from 'react';

export default class ProfileUpdatePercent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profile_completion_percentage: 0,
        color:'danger'
    };
}

updateUser = async (profile_completion_percentage)=>{
   const userId = this.props.loggedInUserProfile.id
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
   const user = this.props.loggedInUserProfile
   //let profile_completion_percentage = user.profile_completion_percentage
   if(user.profile_completion_percentage === undefined || user.profile_completion_percentage === null) {
    this.updateUser(0) 
    return
   }
   
   if(user.type === 'car-owner'){ // car owner profile percent updates
      if(user.carOwnerProfile === null){
        this.setState({
            profile_completion_percentage: '3%',
            color:'danger', // red
            message:'This profile is too empty, please add some data, as it stands, you cannot create a job or get listed as a car owner'
        })
        if(parseInt(user.profile_completion_percentage) ===  3) return // don't make update then
        this.updateUser(3)
        return
      }
      const carOwnerProfile = user.carOwnerProfile // get driver's profile
      if(carOwnerProfile.details === null){
        this.setState({
            profile_completion_percentage:'5%',
            color: 'danger',
            message:'!Please add details like first and last name, phone number, about you, etc. In order to activate your profile'
        })
        if(parseInt(user.profile_completion_percentage) ===  5) return // don't make update then
        this.updateUser(5)
        return
      }
      
      const profileDetails = carOwnerProfile.details
      if(profileDetails.firstname === null || profileDetails.lastname === null){
        this.setState({
            profile_completion_percentage:'9%',
            color: 'danger',
            message:'!Please add a firstname and lastname to be listed as a driver'
        })
        if(parseInt(user.profile_completion_percentage) ===  9) return // don't make update then
        this.updateUser(9)
        return
      }

      if(profileDetails.phone_number === null){
        this.setState({
            profile_completion_percentage:'9%',
            color: 'danger',
            message:'!Please add a number to start posting jobs or get them listed'
        })
        if(parseInt(user.profile_completion_percentage) ===  9) return // don't make update then
        this.updateUser(9)
        return
      }
      if(profileDetails.age === null || profileDetails.gender === null){
        this.setState({
            profile_completion_percentage:'15%',
            color: 'warning',
            message:'Please add an age and a gender to stand out on profile and job listings'
        })
        if(parseInt(user.profile_completion_percentage) ===  15) return // don't make update then
        this.updateUser(15)
        return
      }
      if(profileDetails.profile_cover_image === null || profileDetails.profile_thumbnail_image === null || profileDetails.about === null){
        this.setState({
            profile_completion_percentage:'20%',
            color: 'warning',
            message:'Please add a profile photo, cover photo and an about you to stand out on profile and job listings'
        })
        if(parseInt(user.profile_completion_percentage) ===  20) return // don't make update then
        this.updateUser(20)
        return
      }
    this.setState({
        profile_completion_percentage:'75%',
        color: 'success',
        message:(<>You have successfully updated your profile details to the highest percentage, you are now eligible to begin requesting for verification. <strong>Click this message to see the steps</strong></>)
    })
    if(parseInt(user.profile_completion_percentage) ===  75) return // don't make update then
    this.updateUser(75)
   }
   else{// a driver
      if(user.driverProfile === null){
        this.setState({
            profile_completion_percentage:'3%',
            color: 'danger',
            message:'You have no profile yet, please add some information to your profile to activate account'
        })
        if(parseInt(user.profile_completion_percentage) ===  3) return // don't make update then
        this.updateUser(3)
        return
      }
      
      const driverProfile = user.driverProfile // get driver's profile
      if(driverProfile.details === null){
        this.setState({
            profile_completion_percentage:'5%',
            color: 'danger',
            message:'!Please add details like first and last name, phone number, about you, etc. In order to activate your profile'
        })
        if(parseInt(user.profile_completion_percentage) ===  5) return // don't make update then
        this.updateUser(5)
        return
      }
      
      const profileDetails = driverProfile.details
      if(profileDetails.firstname === null || profileDetails.lastname === null){
        this.setState({
            profile_completion_percentage:'9%',
            color: 'danger',
            message:'!Please add a firstname and lastname to be listed as a driver'
        })
        if(parseInt(user.profile_completion_percentage) ===  9) return // don't make update then
        this.updateUser(9)
        return
      }

      if(profileDetails.phone_number === null){
        this.setState({
            profile_completion_percentage:'9%',
            color: 'danger',
            message:'!Please add a number to start applying to jobs or get listed'
        })
        if(parseInt(user.profile_completion_percentage) ===  9) return // don't make update then
        this.updateUser(9)
        return
      }
      if(profileDetails.age === null || profileDetails.gender === null){
        this.setState({
            profile_completion_percentage:'15%',
            color: 'warning',
            message:'Please add an age and a gender to stand out on profile and job listings'
        })
        if(parseInt(user.profile_completion_percentage) ===  15) return // don't make update then
        this.updateUser(15)
        return
      }
      if(profileDetails.profile_cover_image === null || profileDetails.profile_thumbnail_image === null || profileDetails.about === null){
        this.setState({
            profile_completion_percentage:'20%',
            color: 'warning',
            message:'Please add a profile photo, cover photo and an about you to stand out on profile and job listings'
        })
        if(parseInt(user.profile_completion_percentage) ===  20) return // don't make update then
        this.updateUser(20)
        return
      }
      if(driverProfile.address===null || driverProfile.nrc_front === null || driverProfile.nrc_back === null){
        this.setState({
            profile_completion_percentage:'30%',
            color: 'info',
            message:'Please add an Address, and Nrc Front and Back photos to stand out on profile and job listing and potentially get verified by DriverBase'
        })
        if(parseInt(user.profile_completion_percentage) ===  30) return // don't make update then
        this.updateUser(30)
        return
      }
      if(driverProfile.drivers_license_front === null || driverProfile.drivers_license_back === null || driverProfile.driving_certificate_front === null || driverProfile.driving_certificate_back === null){
        this.setState({
            profile_completion_percentage:'65%',
            color: 'info',
            message:'Please add a driving license front and driving license back to stand out on profile and job listings'
        })
        if(parseInt(user.profile_completion_percentage) ===  65) return // don't make update then
        this.updateUser(65)
        return
      }

      if(driverProfile.experience === null /*|| driverProfile.categories.length < 0*/){
        this.setState({
            profile_completion_percentage:'70%',
            color: 'info',
            message:'You Are Almost Done! Please add a profile photo and cover photo to stand out on profile and job listings'
        })
        if(parseInt(user.profile_completion_percentage) ===  70) return // don't make update then
        this.updateUser(70)
        return
      }

    this.setState({
        profile_completion_percentage:'75%',
        color: 'success',
        message:(<>You have successfully updated your profile details to the highest percentage, you are now eligible to begin requesting for verification. <strong>Click this message to see the steps</strong></>)
    })
    if(parseInt(user.profile_completion_percentage) ===  75) return // don't make update then
    this.updateUser(75)
   }
}
render() {
    if(parseInt(this.props.loggedInUserProfile.profile_completion_percentage) === 75) return (
      <div className={"alert alert-"+this.state.color}> <Link href='/verification_steps'><p>{this.state.message}</p><p>{'Your profile is now updated: '+this.state.profile_completion_percentage}</p></Link></div>);
    return (
        <div className={"alert alert-"+this.state.color}> <Link href='/profile'><p>{this.state.message}</p> <p>{'Your profile is now updated: '+this.state.profile_completion_percentage}</p></Link></div>
    );
}

}
