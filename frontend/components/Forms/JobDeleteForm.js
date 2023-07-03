import React, { Component, useReducer } from 'react';

class JobDeleteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        submitting: false,
        submittingText: 'Delete Job'
    };
  }
  

  handleSubmit = async (event) => {
    // firstly add a job to the jobs backend
    try {
      this.setState({submitting:true,submittingText:'Deleting Job...'})// to disable button from re-requesting
        const updatedJob = await fetch(this.props.api_url+'/jobs/'+this.props.job.data.id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.jwt}`
        }
      })
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));
      this.setState({submitting:true,submittingText:'Job Deleted'})
    } catch (error) {
       console.error('Error deleting job:', error);
    }
  };

  render() {
    const { error } = this.state;
    if(this.props.loggedInUserProfile === 'logged-out') window.location = '/login'
    return (
      <div>
        <div className="post-input">
          <button disabled={this.state.submitting} onClick={this.handleSubmit} className="btn btn-danger">{this.state.submittingText}</button>
        </div>
      </div>
    );
  }
}

export default JobDeleteForm;

    