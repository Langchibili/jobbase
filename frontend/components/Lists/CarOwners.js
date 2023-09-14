import Link from 'next/link';
import React, { Component } from 'react';

class CarOwners extends Component {
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
  
  checkEligibility = (carOwner)=>{
    let eligibleForListing = false
    let carOwnerProfile
    if(this.props.listAll) { // if on list all page
        carOwnerProfile = carOwner.attributes // the profile
        if(carOwnerProfile.details === null || carOwnerProfile.details === undefined) { 
          return false // you aren't eligible
        }
        if(carOwnerProfile.details.firstname === null || carOwnerProfile.details.lastname === null){
          eligibleForListing = false
        }
        else{
          eligibleForListing = true
      }
    }
    else{ // if a shorter list
        carOwnerProfile = carOwner.carOwnerProfile // the profile
        if(carOwner.profile_completion_percentage < 9){
          eligibleForListing = false
        }
        else{
          eligibleForListing = true
      }
    }
    return eligibleForListing
  }


  rendercarOwnersList = ()=>{
    const listFormat = this.props.listFormat;
    const carOwners = this.props.carOwners
    console.log('car owners frontpage',carOwners)
    if(carOwners.length === 0) return <p>No Car Owners Registered Yet</p>
    if(listFormat === 'grid'){
        return <></>;
    }
    else{
        let userId,fullname, rating, thumbnail, profile_url,eligibleForListing,carOwnerProfile
        return carOwners.map((carOwner)=>{
          if(this.props.listAll) { // set userId for user profiles
            userId = parseInt(carOwner.attributes.userid) // the userid
            carOwnerProfile = carOwner.attributes // the profile if attributes property exists
          }
          else{
            userId = carOwner.id // the userid
            carOwnerProfile = carOwner.carOwnerProfile // the profile no attribute property
          }

          eligibleForListing = this.checkEligibility(carOwner) // check carOwner listing eligibility
          
           if(eligibleForListing){ //check if profile has got details to it
               fullname = carOwnerProfile.details.firstname? carOwnerProfile.details.firstname +' '+ carOwnerProfile.details.lastname || '' : ''
               if(carOwnerProfile.details.profile_thumbnail_image !== null){ // check if thumbnail exists
                   const backEndUrl = this.props.api_url.replace('/api','')
                   thumbnail = carOwnerProfile.details.profile_thumbnail_image.formats? backEndUrl+carOwnerProfile.details.profile_thumbnail_image.formats.thumbnail.url : '/default-profile.png' 
               }    
               else{
                  thumbnail = '/default-profile.png' 
               } 
               // PROFILE URL
               profile_url = '/profile?uid='+carOwner.id+'&user_type=car-owner'
               //RATING 
               rating = carOwnerProfile.details.average_rating? carOwnerProfile.details.average_rating : ''
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
                      <a className="contact-icon" href="#"><i className="fa fa-phone" /></a>
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
    return this.rendercarOwnersList()
  }
}

export default CarOwners;

