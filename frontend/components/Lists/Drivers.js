import React, { Component } from 'react';
import { imageUrlFormat } from '@/Constants';
import { EscalatorWarningOutlined } from '@mui/icons-material';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default class Drivers extends Component {
  constructor(props) {
    super(props);
    this.state = {
       openPhoneNumberDialog: false
    };
  }

  dateCreated = (dateInput)=>{
    let date = new Date(dateInput)
    date = date.toLocaleString('en-US',{timeZone:'Africa/Harare'})
    date = new Date(date)
    return date.toDateString()
  }
  
  checkEligibility = (driver)=>{
    let eligibleForListing = false
    let driverProfile
    if(this.props.listAll) { // if on list all page
        driverProfile = driver.attributes // the profile
        if(driverProfile.details === null || driverProfile.details === undefined) { 
          return false // you aren't eligible
        }
        if(driverProfile.details.firstname === null || driverProfile.details.lastname === null){
          eligibleForListing = false
        }
        else{
          eligibleForListing = true
      }
    }
    else{ // if a shorter list
        driverProfile = driver.driverProfile // the profile
        if(driver.profile_completion_percentage < 9){
          eligibleForListing = false
        }
        else{
          eligibleForListing = true
      }
    }
    return eligibleForListing
  }
  
  handleDialogOpen = (e)=>{
    e.preventDefault()
    this.setState({
        openPhoneNumberDialog: true
    })
  }
  handleDialogClose = ()=>{
    this.setState({
    openPhoneNumberDialog: false
    })
  }

  renderDriverNumber = (phone_number,handleDialogOpen)=>{
    if(this.props.loggedInUserProfile.type === "driver" || this.props.loggedInUserProfile === "logged-out"){
      return <a className="contact-icon" href="#" onClick={handleDialogOpen}><i className="fa fa-phone" /></a>
    }
    if(this.props.loggedInUserProfile.profile_completion_percentage < 9){
      return <a className="contact-icon" href="#" onClick={handleDialogOpen}><i className="fa fa-phone" /></a>
    }
    return <a className="contact-icon" href={"tel://"+phone_number}><i className="fa fa-phone" /></a>
  }

  renderDriversList = ()=>{
    const listFormat = this.props.listFormat;
    const drivers = this.props.drivers
    if(drivers.length === 0) return <p>No Drivers Registered Yet</p>
    if(listFormat === 'grid'){
        return <></>;
    }
    else{
        let userId,fullname,phone_number,thumbnail,thumbnailUrl,profile_url,rating,eligibleForListing,driverProfile
        return drivers.map((driver)=>{
            if(this.props.listAll) { // set userId for user profiles
              userId = parseInt(driver.attributes.userid) // the userid
              driverProfile = driver.attributes // the profile if attributes property exists
            }
            else{
              userId = driver.id // the userid
              driverProfile = driver.driverProfile // the profile no attribute property
            }

            eligibleForListing = this.checkEligibility(driver) // check driver listing eligibility
            if(eligibleForListing){ // check if user has a profile 
                // FULLNAME  
                fullname = driverProfile.details.firstname? driverProfile.details.firstname +' '+ driverProfile.details.lastname || '' : ''
                // THUMBNAIL
                if(driverProfile.details.profile_thumbnail_image !== null){ // check if thumbnail exists
                    const backEndUrl = this.props.api_url.replace('/api','')
                    if(this.props.listAll) {
                        if(driverProfile.details.profile_thumbnail_image.data === null) { 
                          thumbnail = '/default-profile.png' 
                        }
                        else{
                          thumbnailUrl = imageUrlFormat(driverProfile.details.profile_thumbnail_image.data.attributes,'thumbnail')
                        }
                    }
                    else{
                        thumbnailUrl = imageUrlFormat(driverProfile.details.profile_thumbnail_image,'thumbnail')
                    }
                    // adding an api url path to the image source
                    if(driverProfile.details.profile_thumbnail_image.data === null) { 
                       thumbnail = '/default-profile.png' 
                    }
                    else{
                       thumbnail = backEndUrl+thumbnailUrl
                    }
                    
                }    
                else{
                  thumbnail = '/default-profile.png' 
                } 

                //PHONE NUMBER
                phone_number = driverProfile.details.phone_number? driverProfile.details.phone_number : '' 
                //PROFILE URL
                profile_url = '/profile?uid='+userId+'&user_type=driver'
                //RATING 
                rating = driverProfile.details.average_rating? driverProfile.details.average_rating : ''
             }
             else{
                return
             }
          
            return ( 
              <div className="card-body" key={userId}> 
                <PhoneNumberDialog openPhoneNumberDialog={this.state.openPhoneNumberDialog} handleDialogClose={this.handleDialogClose}/>
                <div id="DZ_W_Todo1" className="widget-media dz-scroll ps ps--active-y">
                  <ul className="timeline">
                    <li>
                      <div className="timeline-panel">
                        <div className="media me-2">
                          <Link href={profile_url}><img alt="image" width={50} src={thumbnail} /></Link>
                        </div>
                        <div className="media-body">
                          <Link href={profile_url}><h5 className="mb-1" style={{textTransform:'capitalize'}}>{fullname}</h5></Link>
                          <small className="d-block">{rating+' '}<span className='fa fa-star text-danger'></span></small>
                        </div>
                        <div className="d-flex">
                          <a className="contact-icon me-3" href="#"><i className="fa fa-truck" aria-hidden="true" /></a>
                          {this.renderDriverNumber(phone_number,this.handleDialogOpen)}
                        </div>
                      </div>
                    </li>
                  </ul>
                  </div>
              </div>
            )
        })
    }
  }

  render() {
    return this.renderDriversList()
  }
}



 function PhoneNumberDialog(props) {
  return (
    <div>
      <Dialog
        fullScreen={false}
        open={props.openPhoneNumberDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"!Sorry. Only Car Owners Can View Drivers' Contact Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Phone numbers for drivers are only accessible to registered car owners, 
            in order to view this driver's phone number, 
            create an account as a car owner or log into an already existing car owner account
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleDialogClose}>
            Close
          </Button>
          <Link className='btn btn-sm btn-primary' href="/signup" autoFocus>
            SignUp
          </Link>
          <Link className='btn btn-sm btn-primary' href="/login" autoFocus>
            Login
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
