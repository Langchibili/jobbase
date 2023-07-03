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
  
  renderDriversList = ()=>{
    const listFormat = this.props.listFormat;
    const drivers = this.props.drivers
    if(drivers.length === 0) return <p>No Drivers Registered Yet</p>
    if(listFormat === 'grid'){
        return <></>;
    }
    else{
        let fullname, phone_number, thumbnail, profile_url,rating
        return drivers.map((driver)=>{
          if('driverProfile' in driver){ // check if user has a profile
            const driverProfile = driver.driverProfile
            if('details' in driverProfile){ //check if profile has got details to it
               // FULLNAME  
               fullname = driverProfile.details.firstname? driverProfile.details.firstname +' '+ driverProfile.details.lastname || '' : ''
               // THUMBNAIL
               if(driverProfile.details.profile_thumbnail_image !== null){ // check if thumbnail exists
                   const backEndUrl = this.props.api_url.replace('/api','')
                   thumbnail = driverProfile.details.profile_thumbnail_image.formats? backEndUrl+driverProfile.details.profile_thumbnail_image.formats.thumbnail.url : '/default-profile.png' 
               }    
               else{
                  thumbnail = '/default-profile.png' 
               } 
               //PHONE NUMBER
               phone_number = driverProfile.details.phone_number? driverProfile.details.phone_number : '' 
               //PROFILE URL
               profile_url = '/profile?uid='+driver.id+'&user_type=driver'
               //RATING 
               rating = driverProfile.details.average_rating? driverProfile.details.average_rating : ''
              }
            else{
              return
            }
          }
          else{
            return
          }
          return ( 
            <div className="card-body"> 
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

