import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ContentLoader from './ContentLoader';
import List from '../Lists/List';
import { getJwt, imageUrlFormat, minimal_car_owner_populate_url, minimal_driver_populate_url } from '@/Constants';

export default class JobView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requesting: true,
      applicants:[],
      carOwner: null,
      carOwnerProfile: null,
      carOwnerId: null,
      noCarOwner: false
    }
  }
  dateCreated = (dateInput)=>{
     let date = new Date(dateInput)
     date = date.toLocaleString('en-US',{timeZone:'Africa/Harare'})
     date = new Date(date)
     let datePart = date.toDateString()
     let timePart = date.toTimeString()
     timePart = timePart.split(':')
     return datePart+' '+timePart[0]+ ':'+ timePart[1]
  }
  

  getJob = async (jid)=> {
    return fetch(this.props.api_url+'/jobs/'+jid+'/?populate=applicants',{
        headers: {
          'Content-Type': 'application/json'
        }
       }).then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));
  }

  getCarOwner = async (jid)=> {
      return fetch(this.props.api_url+'/jobs/'+jid+'/?populate=car_owner_profile',{
          headers: {
            'Content-Type': 'application/json'
          }
         }).then(response => response.json())
          .then(data => data)
          .catch(error => console.error(error));
  }

  getCarOwnerProfile = async (profileId)=> {
    return fetch(this.props.api_url+'/car-owner-profiles/'+profileId+'/'+minimal_car_owner_populate_url,{
        headers: {
          'Content-Type': 'application/json'
        }
       }).then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));
}
     
  getApplicants = async (uid)=> {
    return fetch(this.props.api_url+'/users/'+uid+'/?'+minimal_driver_populate_url,{
        headers: {
          'Content-Type': 'application/json'
        }
       }).then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));
    }

 async componentDidMount(){
    const jid  = this.props.jid
    let job = await this.getJob(jid) // get job then... 
    job = job.data.attributes
    this.setState({
        job:job
    },async ()=>{
      const carOwner = await this.getCarOwner(jid) // get carowner
      if(carOwner.data.attributes.car_owner_profile.data === null) {
        this.setState({
          noCarOwner: true,
          requesting: false
        })
        return
      }
      const carOwnerProfile = await this.getCarOwnerProfile(carOwner.data.attributes.car_owner_profile.data.id) // get the carowner profile details
      this.setState({ // get care owner, from which get the carownerprofile and then the applicants and use the userid to get the users and display em
        carOwner: carOwner,
        carOwnerProfile: carOwnerProfile.data.attributes.details,
        carOwnerId: parseInt(carOwner.data.attributes.userid)
      }, async () => { // get the users, use promise.all to furfill the array of promises that are returned
            const applicants = await Promise.all(job.applicants.data.map(async (applicant) => {
              return await this.getApplicants(applicant.attributes.userid);
            }))
            this.setState({
              applicants: applicants,
              requesting: false
            })
      })
    })
    
 }

  render() {
    if(this.state.requesting) return <ContentLoader text='loading job...'/>
    if(this.state.noCarOwner) return <>The Job You Are Looking For Either Doesn't Exist Or The Owner Has Drafted It.</>
    const job = this.state.job
    const carOwnerProfile = this.state.carOwnerProfile
    const rating = carOwnerProfile.average_rating? carOwnerProfile.average_rating : ''
    let thumbnail,thumbnailUrl // to be filled later
    // the thumbnail stuff
     const backEndUrl = this.props.api_url.replace('/api','')
    if(carOwnerProfile.profile_thumbnail_image.data === null) { 
      thumbnail = '/default-profile.png' 
    }
    else{
      thumbnailUrl = imageUrlFormat(carOwnerProfile.profile_thumbnail_image.data.attributes,'thumbnail')
    }
    thumbnail = backEndUrl+thumbnailUrl
   return(<div>
        <div className="card shadow">
            <div className="card-body">
              <div className="media">
                <div className="media-body">
                    <Link href={'/profile?uid='+this.state.carOwnerId+'&user_type=car-owner'}>
                    <p className="mb-1" style={{textTransform:'capitalize'}}>{carOwnerProfile.firstname + ' ' + carOwnerProfile.lastname}</p>
                    </Link>
                    <h4 className="fs-20">{carOwnerProfile.verified? <strong><span className="text-green">Verified&#x2714; </span></strong>: <span className="text-orange">unverified</span>}</h4></div>
                    <Link href={'/profile?uid='+this.state.carOwnerId+'&user_type=car-owner'}><img src={thumbnail} alt='image' style={{width:60,height:60}}/></Link>
                </div>
                 <div><small className="d-block font-w500">Car Owner's Rating: {rating+' '}<span className='fa fa-star text-danger'></span></small></div>
                 <div><small className="d-block font-w500"> Pays: <span className='text-primary font-w300'>K500 - K25,000</span></small></div>
                
                 <div style={{height:1,backgroundColor:'lightgray',opacity:0.5}} className='mt-1 mb-2'></div>{/* line break */}
                 <p className="fs-14">{job.body}</p><div className="d-flex align-items-center mt-4">
                <Link href={this.props.loggedInUserProfile !== 'logged-out'? '/job_application?jid='+this.props.jid : '/login'} className="btn btn-danger light btn-rounded me-auto" onClick={this.props.handlePageChange}>Apply</Link>
                    <a href="#" >PART-TIME</a>
                            <span className="text-black font-w500 ps-3">{this.dateCreated(job.createdAt)}</span>
                    </div>
                </div>
        </div>
        {this.state.applicants.length > 1? <List
              loggedInUserProfile={this.props.loggedInUserProfile}
              handlePageChange={this.props.handlePageChange}
              itemsName ='users'
              items={this.state.applicants}
              api_url={this.props.api_url}
              listType='drivers' 
              listTitle='Applicants' /> : 'No applicants to this job yet'}
    </div>)
  }
}