import React, { Component } from 'react';

class JobsAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobBody: '',
      title: '',
      error: null,
      submitting: false,
      submittingText:'Post',
      loggedInUserProfile: this.props.loggedInUserProfile
    };
  }

  getTitle = (event) => {
    this.setState({ title: event.target.value, error: null });
  };

  handleChange = (event) => {
    this.setState({ jobBody: event.target.value, error: null });
  };


   // add a new job to the user(car-owner) jobs array
 updateUserWIthNewJob = async (user,newJob)=>{
     console.log(user)
     const jobs = user.carOwnerProfile.jobs // grab job ids
     const carOwnerProfileId = user.carOwnerProfile.id // get car owner id
     const jobCreationPoints = user.carOwnerProfile.job_creation_points - 5
     jobs.push(newJob.data.id) // push new job id into car owner object
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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { jobBody, title } = this.state;
    const user = this.state.loggedInUserProfile // get the job creating user data

    if (!jobBody) {
      this.setState({ error: "Write something about the job, Eg, 'I need a driver to transport goods for me...'" });
      return;
    }
    
    const jobObject = {
      data: {
        userid: user.id,
        title:title || 'untitled',
        body: jobBody,
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
        if(response.ok) console.log('Job submitted successfully!');
        this.setState({submittingText:'Done'})// to disable button from re-requesting
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
            placeholder="Write Your job description here...."
            value={this.state.reviewBody}
            onChange={this.handleChange}
          />
          {error && <div className="text-danger">{error}</div>}
          <button disabled={this.state.submitting} onClick={this.handleSubmit} className="btn btn-primary">{this.state.submittingText}</button>
        </div>
      </div>
    );
  }
}

export default JobsAddForm;

    