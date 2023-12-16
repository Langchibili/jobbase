import React, { Component } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { backEndUrl, clientUrl, fakeStr1, fakeStr2, getJwt, sendNotification, textHasEmailAddress, textHasPhoneNumber } from '@/Constants';
import { getFCMToken, requestNotificationPermission } from '../Includes/firebase';
// import ImageUploader from './ImageUploader';

class JobsAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobBody: '',
      newJob: null,
      jobDuration: 'fulltime',
      title: '',
      pay:'',
      error: null,
      submitting: false,
      submittingText:'Post',
      notificationsAllowed: false,
      loggedInUserProfile: this.props.loggedInUserProfile
    };
  }

  getTitle = (event) => {
    this.setState({ title: event.target.value, error: null });
  };
  setPay = (event) => {
    this.setState({ pay: event.target.value, error: null });
  };

  handleChange = (event) => {
    this.setState({ jobBody: event.target.value, error: null });
  };

  handleFullTimeChange = (event) => {
    const jobDuration = event.target.value;
    this.setState({
     jobDuration: jobDuration,
     error: null
    })
 };
   // add a new job to the user(car-owner) jobs array
 updateUserWIthNewJob = async (user,newJob)=>{
     const jobs = user.carOwnerProfile.jobs // grab job ids
     const carOwnerProfileId = user.carOwnerProfile.id // get job owner id
     // for now job owners shall post jobs for free
     const jobCreationPoints = user.carOwnerProfile.job_creation_points - 0
     jobs.push(newJob.data.id) // push new job id into job owner object
     const carOwnerProfileJobsUpdate = {id : carOwnerProfileId, data:{jobs:  jobs,job_creation_points:jobCreationPoints}}
     return await fetch(this.props.api_url+'/car-owner-profiles/'+carOwnerProfileId, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.props.jwt}`
            },
            body: JSON.stringify(carOwnerProfileJobsUpdate),
     });
  }

  // imageThumbnail = ()=>{
  //   const image = null
  //   if(this.state.userProfile.carOwnerProfile.details.profile_cover_image === null) return image
  //   return this.state.userProfile.carOwnerProfile.details.profile_cover_image
  // }
  async componentDidMount(){
      const token = await getFCMToken() // get existing token
      if(token === null || token === undefined){
        this.setState({
          error: <><div style={{color:"forestgreen",fontWeight:900}}>You must allow notifications to proceede. We need to send you notifications whenever a user applies to your job. If you are using the mobile application, visit the web page by clicking the link below to allow notifications, then come back to the app. And we recomend that you open the web page in a google chrome browser </div><a style={{color:"cadetblue",border:"1px solid cadetblue",display:"inline-block",borderRadius:4,padding:5,marginTop:5,fontWeight:900}} href={clientUrl+"/notifications?jwt="+fakeStr1+getJwt()+fakeStr2+"&uid="+this.props.loggedInUserProfile.id} target="_blank">Allow Notifications</a></>
        },async ()=>{
            const permissionGranted = await requestNotificationPermission();
            if(permissionGranted){
                this.setState({
                  notificationsAllowed: true,
                  error: null
                },()=>{
                  getFCMToken() // upload the token to user's user object
                })
            }
          }) 
      }
      else{
        this.setState({
          notificationsAllowed: true,
          error: null
        })
        getFCMToken() // upload the token again to user's user object, rerun incase the token expired so u regained it
      }
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const { jobBody, title, jobDuration, pay } = this.state;
    const user = this.state.loggedInUserProfile // get the job creating user data

    if (!jobBody) {
      this.setState({ error: "Write something about the job, Eg, 'I need a professional to work as a parttime or fulltime manager...'" });
      return
    }

    if(textHasPhoneNumber(jobBody)){
      this.setState({
        error: "You cannot add a phone number into the job description. Please remove the phone number to post the job."
      })
      return
    }           
    
    if(textHasPhoneNumber(title)){
      this.setState({
        error: "You cannot add a phone number into the job title. Please remove the phone number to post the job."
      })
      return
    }

    if(textHasEmailAddress(jobBody)){
      this.setState({
        error: "You cannot add an email address into the job description. Please remove the email address to post the job."
      })
      return
    }
    if(textHasEmailAddress(jobBody)){
      this.setState({
        error: "You cannot add an email address into the job title. Please remove the email address to post the job."
      })
      return
    }

    const jobObject = {
      data: {
        userid: user.id,
        title:title || 'untitled',
        job_duration: jobDuration || 'fulltime',
        body: jobBody,
        pay: pay,
        car_owner_profile : user.carOwnerProfile.id
     }
   };
   
    // firstly add a job to the jobs backend
    try {
        this.setState({submitting:true,submittingText:'Posting...'}) // to disable button from re-requesting
        const newJob = await fetch(this.props.api_url+'/jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.jwt}`
        },
        body: JSON.stringify(jobObject)
      })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));


      if (newJob) {
        const response = await this.updateUserWIthNewJob(user,newJob) // update user object
        if(response.ok) {
          console.log('Job submitted successfully!')
           sendNotification('New Job Posted',"A New Job Has Been Added, Apply Now","","publish","broadcast","","newjob") // send notification to all subscribed users
        }
        this.setState({newJob:newJob,submittingText:'Done'})// to disable button from re-requesting
      } else {
        console.error('Failed to submit job:');
      }
    } catch (error) {
       console.error('Error submitting job:', error);
    }
  };
  
 
  
  render() {
    const { error } = this.state;
    return (
      <div>
        <div className="post-input">
          <input type='text' onChange={this.getTitle} className='form-control sm-transparent' placeholder='Title of Job'/>
          <textarea
            name="jobBody"
            id="jobBody"
            cols={30}
            rows={5}
            className="form-control bg-transparent"
            placeholder="Write Your job description here..."
            value={this.state.reviewBody}
            onChange={this.handleChange}
          />
          <InputLabel id="demo-simple-select-label">What's This Job's Duration?</InputLabel>
          <Select
          sx={{marginBottom:2}}
          labelId="job-duration-simple-select-label"
          id="job-duration-simple-select"
          value={this.state.jobDuration}
          label="job-uration"
          onChange={this.handleFullTimeChange}
        >
          <MenuItem value="fulltime">FullTIme</MenuItem>
          <MenuItem value="part-time">PartTime</MenuItem>
        </Select>
        
        <p className='text text-info' id="demo-simple-select-label"><strong>How much will this job pay? We will show a range of 1500 to 25000 if not set.</strong></p>
        <input type='text' onChange={this.setPay} className='form-control sm-transparent' placeholder='Pay of Job'/>
          
          {/* {this.state.newJob !== null? <ImageUploader  
                  api_url={this.props.api_url}
                  refName="api::job.job"
                  refId={this.state.newJob.data.id}
                  imageName='Add A Job Advert Image'
                  fieldName="job_image"
                  image={this.imageThumbnail()}
                  jwt={this.props.jwt}/> : <></>} */}

          {error !== null && <div className="text-warning" style={{marginBottom:'5px'}}>{error}</div>}
          {!this.state.notificationsAllowed? <button className="btn btn-primary" style={{backgroundColor:'lightgray'}}>Post</button> : <button disabled={this.state.submitting} onClick={this.handleSubmit} className="btn btn-primary">{this.state.submittingText}</button>}
        </div>
      </div>
    );
  }
}

export default JobsAddForm;