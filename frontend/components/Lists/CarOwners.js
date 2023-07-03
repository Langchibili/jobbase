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
  
  renderDriversList = ()=>{
    const listFormat = this.props.listFormat;
    const carOwners = this.props.carOwners
    if(carOwners.length === 0) return <p>No Car Owners Registered Yet</p>
    if(listFormat === 'grid'){
        return <></>;
    }
    else{
        let fullname, phone_number, thumbnail, profile_url
        return carOwners.map((carOwner)=>{
          if('carOwnerProfile' in driver){ // check if user has a profile
            const carOwnerProfile = carOwner.carOwnerProfile
            if('details' in carOwnerProfile){ //check if profile has got details to it
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
                      <small className="d-block">{'Joined: '+this.dateCreated(driver.createdAt)}</small>
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
    return this.renderDriversList()
  }
}

export default CarOwners;

