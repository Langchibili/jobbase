import * as React from 'react';

export default class JobsCounts extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          jobsCount: 0
      };
    }
    async componentDidMount(){
         const count = await fetch(this.props.api_url+'/jobs/count',{
            headers: {
              'Content-Type': 'application/json'
            }
           }).then(response => response.json())
            .then(data => data)
            .catch(error => console.error(error))
        if(count >= 0){
            this.setState({
                jobsCount: count
            })
        }
    }

    render(){
        return(
            <div className="col-xl-3 col-xxl-6 col-sm-6">
            <div className="card bg-secondary">
              <div className="card-body">
                <div className="media align-items-center">
                  <span className="p-3 me-3 feature-icon rounded">
                    <svg width={36} height={36} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.4998 10.4995H35.0002V38.4999H38.4998C40.4245 38.4999 42 36.9238 42 34.9992V13.9992C42 12.075 40.4245 10.4995 38.4998 10.4995Z" fill="white" />
                      <path d="M27.9998 10.4995V6.9998C27.9998 5.07515 26.4243 3.49963 24.5001 3.49963H17.4998C15.5756 3.49963 14.0001 5.07515 14.0001 6.9998V10.4995H10.5V38.4998H31.5V10.4995H27.9998ZM24.5001 10.4995H17.4998V6.99929H24.5001V10.4995Z" fill="white" />
                      <path d="M3.50017 10.4995C1.57551 10.4995 0 12.075 0 13.9997V34.9997C0 36.9243 1.57551 38.5004 3.50017 38.5004H6.99983V10.4995H3.50017Z" fill="white" />
                    </svg>
                  </span>
                  <div className="media-body text-end">
                    <p className="fs-18 text-white mb-2">Jobs Posted</p>
                    <span className="fs-48 text-white font-w600">{this.state.jobsCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}