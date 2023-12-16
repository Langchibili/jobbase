import { Alert } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export default class InitialAccountSetUp extends React.Component {
  render(){
    const loggedInUserProfile = this.props.loggedInUserProfile
    if(loggedInUserProfile === 'logged-out') return <RedirectUser/>
    if(loggedInUserProfile.profile_completion_percentage >= 9) return <RedirectUser/>
    return (
        <><div style={{height:'300px',backgroundImage:'url("/jobbasewelcomescreen.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div><div>{loggedInUserProfile.type === "driver"? <DriverWelcomeScreen/>: <CarOwnerWelcomeScreen/>}
       </div></>
     )
  }
}

function RedirectUser(){
    const router = useRouter();
    router.push('/')
    return <></>
}

function DriverWelcomeScreen(){
    return (<Alert severity='info'>
            <h4>Begin Your Journey Of Applying To Jobs With A Few Steps</h4>
            <p>Click on the button below and update your profile with the important basic details like Your <strong>Names</strong>, <strong>Gender</strong> and <strong>Phone Number</strong></p>
            <Link href="/profile" style={{display:'inline-block',border:'2px solid green',borderRadius:5,color:'green',textTransform:'uppercase',marginTop:5,fontWeight:600,padding:10}}>Update Your Profile</Link>
    </Alert>)
}
function CarOwnerWelcomeScreen(){
    return (<Alert severity='info'>
        <h4>Begin Your Journey Posting Jobs and Finding the Suitable Professionals With A Few Steps</h4>
        <p>Click on the button below and update your profile with the important basic details like Your <strong>Names</strong>, <strong>Gender</strong> and <strong>Phone Number</strong></p>
        <Link href="/profile" style={{display:'inline-block',border:'2px solid green',borderRadius:5,color:'green',textTransform:'uppercase',marginTop:5,fontWeight:600,padding:10}}>Update Your Profile</Link>
</Alert>)
}