import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Link from 'next/link';

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);
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
  renderJob = ()=> {
    const jobs = this.props.jobs
    if(jobs.length === 0) return <p>Jobs Will Show Soon</p>
    return jobs.map((job)=>{
      return (
          <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
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
                      {" — "+this.jobBody(job.attributes.body)}
                    </React.Fragment>
                  }
                />
              <Link href={this.props.loggedInUserProfile !== 'logged-out'? '/job_application?jid='+job.id : '/login'} className='btn btn-sm btn-danger' onClick={this.props.handlePageChange}>Apply</Link>
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
