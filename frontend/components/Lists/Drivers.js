import { imageUrlFormat } from '@/Constants';
import { EscalatorWarningOutlined } from '@mui/icons-material';
import Link from 'next/link';
import React, { Component } from 'react';

class Drivers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial state goes here
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
                          <a className="contact-icon" href={"tel://"+phone_number}><i className="fa fa-phone" /></a>
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

export default Drivers;

