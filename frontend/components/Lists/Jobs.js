import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       carOwnerProfileNames:{}
    }
  }
  jobBody = (body)=>{
    if(body.length > 50) return body.slice(0,50)+'...'
    return body 
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
  
  showLink = (job)=>{
    const act = this.props.act
    if(act === 'edit'){
       return <Link href={this.props.loggedInUserProfile !== 'logged-out'? '/jobs_manage?type=edit&jid='+job.id : '/login'} className='btn btn-sm btn-info' onClick={this.props.handlePageChange}>Edit</Link>
    }
    else if(act === 'delete'){
      return <Link href={this.props.loggedInUserProfile !== 'logged-out'? '/jobs_manage?type=delete&jid='+job.id : '/login'} className='btn btn-sm btn-danger' onClick={this.props.handlePageChange}>Delete</Link>
    }
    return <Link href={this.props.loggedInUserProfile !== 'logged-out'? '/job_application?jid='+job.id : '/login'} className='btn btn-sm btn-danger' onClick={this.props.handlePageChange}>Apply</Link> 
  }
   
  getJobCarOwnersNames = async (jobId,carOwnerProfileNames)=>{
     const carOwnerProfile = await fetch(this.props.api_url+'/jobs/'+jobId+'/?populate=car_owner_profile',{
      headers: {
        'Content-Type': 'application/json'
        }
      }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));

      if('error' in carOwnerProfile){
         return carOwnerProfileNames
      }
      else{
        const carOwner = await fetch(this.props.api_url+'/users/'+carOwnerProfile.data.attributes.car_owner_profile.data.attributes.userid+'?populate=carOwnerProfile,carOwnerProfile.details',{
          headers: {
            'Content-Type': 'application/json'
          }
         }).then(response => response.json())
          .then(data => data)
          .catch(error => console.error(error))
          console.log('the car owner',carOwner)
          if(carOwner.profile_update_percentage <= 5){
            carOwnerProfileNames[jobId] = {
              firstname:'Unknown',
              lastname:'CarOwner'
            }
          }
          carOwnerProfileNames[jobId] = {
            firstname:carOwner.carOwnerProfile.details.firstname, 
            lastname:carOwner.carOwnerProfile.details.lastname
          }
          return carOwnerProfileNames
      }
  }
  componentDidMount(){
    async function updateCarOwnerProfileNames(jobs, ctx) {
      let carOwnerProfileNames = {};
      for (const job of jobs) {
        carOwnerProfileNames = await ctx.getJobCarOwnersNames(job.id, carOwnerProfileNames);
      }
      ctx.setState({
        carOwnerProfileNames: carOwnerProfileNames,
      }, () => {
        console.log('the usernames of the carowners',ctx.state.carOwnerProfileNames);
      });
    }
    
    // Usage inside a Next.js method (e.g., a function within your component or a server-side API route)
    // Assuming 'this.props.jobs' contains the list of jobs and 'this' refers to the current context
    updateCarOwnerProfileNames(this.props.jobs, this);
    
  }
  renderJob = ()=> {
    const jobs = this.props.jobs
    if(jobs.length === 0) return <p>Jobs Will Show Soon</p>
    return jobs.map((job)=>{
      let carOwnerFirstName
      let carOwnerLastName
      if(job.id in this.state.carOwnerProfileNames){
           carOwnerFirstName = this.state.carOwnerProfileNames[job.id].firstname
           carOwnerLastName = this.state.carOwnerProfileNames[job.id].lastname
      }
      else{
        carOwnerFirstName = 'Unknown'
        carOwnerLastName = 'CarOwner'
      }
      const carOwnerName = carOwnerFirstName + ' ' +carOwnerLastName
      return (
          <>
            <ListItem alignItems="flex-start" key={job.id}>
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/job-icon.png" />
                </ListItemAvatar>
                <ListItemText
                  primary={carOwnerName}
                  secondary={
                    <React.Fragment>
                      <Link href={'/jobs?act=show&jid='+job.id} onClick={this.props.handlePageChange}>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {this.dateCreated(job.attributes.createdAt)}
                        </Typography>
                      </Link>
                      <Link href={'/jobs?act=show&jid='+job.id} onClick={this.props.handlePageChange}>
                       {" — "+this.jobBody(job.attributes.body)}
                      </Link>
                    </React.Fragment>
                  }
                />
              {this.showLink(job)}
              </ListItem>
              <Divider variant="inset" component="li" />
        </>
        )
    })
  }

  render() {
    return <div>{this.renderJob()}</div>
  }
}
