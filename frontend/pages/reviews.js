import UpAndBackButton from '@/components/Includes/UpAndBackButton';
import React from 'react';
import Alert from '@mui/material/Alert'; 
import { useRouter } from 'next/router';
import { api_url, getJwt, getLoggedInUserData, minimal_driver_populate_url } from '@/Constants';
import PageLoader from '@/components/Includes/PageLoader';
import ContentLoader from '@/components/Includes/ContentLoader';
import HtmlHead from '@/components/Meta/HtmlHead';
import HtmlFoot from '@/components/Meta/HtmlFoot';
import { Button, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Link from 'next/link';


export default function Reviews() {
    const router = useRouter();
    const { uid,name } = router.query
    const [data, setData] = React.useState({ loading: true, loggedInUserProfile: null });
    
    React.useEffect(() => {
      if (uid && uid !== undefined) {
        async function fetchData() {
          const loggedInUserProfile = await getLoggedInUserData() 
          setData({ loading: false, loggedInUserProfile: loggedInUserProfile });
        }
        fetchData();
      }
    }, [uid]);
    if(data.loading  || data.loggedInUserProfile === null) {
        return (<><PageLoader /> <HtmlHead pageTitle='User | Reviews'/><ContentLoader text='loading reviews...'/><HtmlFoot/> </>)
    }
    if(data.loggedInUserProfile === 'logged-out') window.location = '/login' // you should re-log in
    
    return (<>
    <UpAndBackButton/>
    <HtmlHead pageTitle={name+' | Reviews'}/>
          <ReviewsDisplay uid={uid} name={name} loggedInUserProfile={data.loggedInUserProfile}/>
    <HtmlFoot/>
    </>
  )
}

class ReviewsDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            enoughPoints: null,
            goBack: false,
            gotToPointsPage: false,
            errorExists: false,
            reviews: []
        }
    }
    async componentDidMount(){ //Langson Chibili account to test
        const uid = this.props.uid // the userid who's number we ought to get
        const loggedInUserProfile = this.props.loggedInUserProfile

        const userProfile = await fetch(api_url+'/users/'+uid+'/?populate=user_reviews',{ // get driver's object
            headers: {
              'Content-Type': 'application/json'
            }
           }).then(response => response.json())
            .then(data => data)
            .catch(error => console.error(error));
             
        if('error' in userProfile){
            this.setState({
                 errorExists: true
            })
        }

        if(loggedInUserProfile.type === "driver"){
            if(loggedInUserProfile.driverProfile.application_points < 5){ // check if JCPs are enough for carowner
              this.setState({
                  enoughPoints: false
              })
            }
            else{ // if enough, update the JCP first before redirecting user to driver number
                const newApplicationPoints = loggedInUserProfile.driverProfile.application_points - 5 // reduce JCPs
                const driverProfileId = loggedInUserProfile.driverProfile.id
                const driverProfileJAPUpdate = {id : driverProfileId, data:{application_points:newApplicationPoints}}
                const updated = await fetch(api_url+'/driver-profiles/'+driverProfileId, {
                        method: 'PUT',
                        headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${getJwt()}`
                        },
                        body: JSON.stringify(driverProfileJAPUpdate),
                })
                if(updated.ok){
                    this.setState({
                        enoughPoints: true,
                        reviews: userProfile.user_reviews
                    })
                }
            }
        }
        else if(loggedInUserProfile.type === "car-owner"){
           if(loggedInUserProfile.carOwnerProfile.job_creation_points < 5){ // check if JCPs are enough for carowner
              this.setState({
                  enoughPoints: false
              })
            }
            else{ // if enough, update the JCP first before redirecting user to driver number
                const newJobCreationPoints = loggedInUserProfile.carOwnerProfile.job_creation_points - 5 // reduce JCPs
                const carOwnerProfileId = loggedInUserProfile.carOwnerProfile.id
                const carOwnerProfileJcpUpdate = {id : carOwnerProfileId, data:{job_creation_points:newJobCreationPoints}}
                const updated = await fetch(api_url+'/car-owner-profiles/'+carOwnerProfileId, {
                        method: 'PUT',
                        headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${getJwt()}`
                        },
                        body: JSON.stringify(carOwnerProfileJcpUpdate),
                })
                if(updated.ok){
                    this.setState({
                        enoughPoints: true,
                        reviews: userProfile.user_reviews
                    })
                }
            }
        }
        else{
          return;
        }
    }
    goBack = ()=>{
        this.setState({
            goBack: true
        })
    }
    gotToPointsPage = ()=>{
        this.setState({
            gotToPointsPage: true
        })
    }
    
    renderReviews = (reviews)=>{
        return reviews.map((review)=> <Review key={review.id} review={review}/> )
    }

    render(){
        if(this.state.goBack)  return <GoBack/>
        if(this.state.gotToPointsPage)  return <RedirectUser url={"/points"}/>
        if(this.state.enoughPoints === null) return <Alert>Processing...</Alert>
        if(this.state.errorExists) {
            return (<div>
                        <Alert severity='error'>An error occured, check your connection, or reflesh page</Alert>
                        <Button onClick={this.goBack}>Go Back</Button>
                    </div>)
        }
        if(!this.state.enoughPoints){ 
            return (<div>
                        <Alert severity='warning'>You don't have enough points to view this user's reviews...</Alert>
                        <Button onClick={this.goBack}>Go Back</Button>
                        <Button onClick={this.gotToPointsPage} sx={{color:'red'}}>Buy Points</Button>
                    </div>)
        }
        if(this.state.enoughPoints) return (<> 
              <div style={{width:'100%',textAlign:'center'}}>
                  <h3>Reviews for: {this.props.name}</h3>
                  <Alert severity='info' sx={{maxWidth:500,margin:"0 auto"}}>Note that viewing these reviews has cost you 5 points</Alert>
              </div>
              {this.renderReviews(this.state.reviews)}</>)
    }
}

class Review extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        reviewerPath: null
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

  async componentDidMount(){
      const userProfile = await fetch(api_url+'/users/'+parseInt(this.props.review.userid),{ // get driver's object
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error));
        
      if('error' in userProfile){
          return
      }
      else{
        this.setState({
          reviewerPath: ()=> <Link href={'/profile?uid='+userProfile.id+'&user_Type='+userProfile.type}>Reviewer's Profile</Link>
        })
      }
  }
  render(){
    const review  = this.props.review
    return (
         <div style={{width:'100%',textAlign:'center'}}>
         <div><Typography component="legend">{review.review_body}</Typography></div>
         <div><Typography component="legend">{this.dateCreated(review.createdAt)}</Typography></div>
         <div><Typography component="legend">{review.rating} stars rating</Typography></div>
         <div><Rating name="read-only" value={review.rating} readOnly /></div>
         <>{this.state.reviewerPath !== null? this.state.reviewerPath() : <></>}</>
        <hr/>
         </div>
    )
  }
}

function RedirectUser(props){
    const router = useRouter();
    router.push(props.url)
    return <></>
  }

function GoBack(){
    const router = useRouter();
    router.back()
}