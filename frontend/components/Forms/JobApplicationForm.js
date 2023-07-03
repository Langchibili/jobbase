import React, { Component, useReducer } from 'react';

class JobApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        submitting: false,
        submittingText: 'Submit Application'
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const user = this.props.loggedInUserProfile // get the job applying user data
    if(user.profile_completion_percentage === null || user.profile_completion_percentage <= 9){
      this.setState({submittingText:'Error! Add Number TO Pofile'})
      return
    }
    const jobId = this.props.job.data.id
    const JobApplicants = this.props.job.data.attributes.applicants.data
    JobApplicants.push(user.id)
    const jobApplicationObject = {id: jobId, data:{applicants:JobApplicants}}
    
    // firstly add a job to the jobs backend
    try {
      this.setState({submitting:true,submittingText:'Applying...'})// to disable button from re-requesting
        const updatedJob = await fetch(this.props.api_url+'/jobs/'+jobId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.jwt}`
        },
        body: JSON.stringify(jobApplicationObject)
      })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));


      if (updatedJob) {
        const applicationPoints = user.driverProfile.application_points - 1 // reduce application points by one, coz you have applied to a job
        const jobs = user.driverProfile.jobs // grab job ids
        const driverProfileId = user.driverProfile.id // get car owner id
        jobs.push(jobId) // push new job id into car owner object
        const driverProfileJobsUpdate = {id : driverProfileId, data:{jobs:  jobs},application_points:applicationPoints}
        const response = await fetch(this.props.api_url+'/driver-profiles/'+driverProfileId, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.props.jwt}`
            },
            body: JSON.stringify(driverProfileJobsUpdate),
        });
        if(response.ok) console.log('Job submitted successfully!');
        this.setState({submittingText:'Done'})
       } 
       else {
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
          <button disabled={this.state.submitting} onClick={this.handleSubmit} className="btn btn-primary">{this.state.submittingText}</button>
        </div>
      </div>
    );
  }
}

export default JobApplicationForm;

    