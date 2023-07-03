import React, { Component } from 'react';

class JobsEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: this.props.job.data.attributes,
      title: '',
      error: null,
      submitting: false,
      submittingText:'Update',
      loggedInUserProfile: this.props.loggedInUserProfile
    };
  }

  getTitle = (event) => {
    const job = this.state.job
    job.title = event.target.value
    this.setState({ job: job, error: null });
  };

  handleChange = (event) => {
    const job = this.state.job
    job.body = event.target.value
    this.setState({ job: job, error: null });
  };


  handleSubmit = async (event) => {
    event.preventDefault()
    const job = this.state.job
    const jobId = this.props.job.data.id // from props cause job has no id
    const jobUpdateObject = {id: jobId, data:job}
    delete job.applicants// remove applicants, not needed here
    
    // firstly add a job to the jobs backend
    try {
        this.setState({submitting:true,submittingText:'Updating...'})// to disable button from re-requesting
        const updatedJob = await fetch(this.props.api_url+'/jobs/'+jobId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.jwt}`
        },
        body: JSON.stringify(jobUpdateObject)
      })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));
      if(updatedJob){
        this.setState({submitting:false,submittingText:'Done'})// to disable button from re-requesting
      }
    }
    catch (error) {
      console.error('Error submitting job:', error);
    }
 }

  render() {
    const { error } = this.state;
    const job = this.state.job
    
    if(this.props.loggedInUserProfile === 'logged-out') window.location = '/login'
    return (
      <div>
        <div className="post-input">
          <input type='text' onChange={this.getTitle} className='form-control sm-transparent' value={job.title || 'untitled'}/>
          <textarea
            name="jobBody"
            id="jobBody"
            cols={30}
            rows={5}
            className="form-control bg-transparent"
            value={job.body}
            onChange={this.handleChange}
          />
          {error && <div className="text-danger">{error}</div>}
          <button disabled={this.state.submitting} onClick={this.handleSubmit} className="btn btn-primary">{this.state.submittingText}</button>
        </div>
      </div>
    );
  }
}

export default JobsEditForm;

    