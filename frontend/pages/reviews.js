import React, { Component } from 'react';
import HtmlHead from '@/components/Meta/HtmlHead'
import HtmlFoot from '@/components/Meta/HtmlFoot'
import ReviewsForm from '@/components/Forms/ReviewsForm';
import UserReview from '@/components/Includes/UserReview';
import { api_url,getJwt } from '@/Constants';
import { useRouter } from 'next/router';
import PageLoader from '@/components/Includes/PageLoader';
import ContentLoader from '@/components/Includes/ContentLoader';
import UpAndBackButton from '@/components/Includes/UpAndBackButton';


async function getUserProfile(uid,user_type) {
  let url,userProfile
  if(uid && user_type){ // if queries object empty
    if(user_type === 'driver') url = api_url+'/users/'+uid+'/?populate=driverProfile,driverProfile.details,user_reviews'
    if(user_type === 'car-owner') url = api_url+'/users/'+uid+'/?populate=carOwnerProfile,carOwnerProfile.details,user_reviews'
      userProfile = await fetchData(url);
  }
  if('error' in userProfile) return 'not-found' 
  return userProfile
}
async function fetchData(url){
    return fetch(url,{
      headers: {
        'Content-Type': 'application/json'
      }
     }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error));
  }

async function getLoggedInUserData(){ 
    if(getJwt() === null) return 'logged-out' // you are looged out
    const user = await fetch(api_url+'/users/me',{
    headers: {
    'Authorization': `Bearer ${getJwt()}`,
    'Content-Type': 'application/json'
    }
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
      return user
}


export default function reviews(props) {
    const router = useRouter();
    const [data, setData] = React.useState({loading: true, userProfile: null, loggedInUserProfile: null});
    const { act, uid, user_type } = router.query;

    React.useEffect(() => {
      if(act === 'add' && user_type && uid){ // set loggedin user data state
          async function fetchData() {
            const loggedInUserProfile = await getLoggedInUserData()
            const userProfile = await getUserProfile(uid,user_type) 
            setData({ loading: false, userProfile: userProfile, loggedInUserProfile: loggedInUserProfile });
          }
          fetchData();
      }
    }, [act,uid,user_type]);
    console.log(data.loggedInUserProfile)
    if (data.loggedInUserProfile === 'logged-out') window.location = '/login' // you should re-log in
    
    if (data.loading || data.loggedInUserProfile === null || data.userProfile == null) {
        return (<> <PageLoader/><HtmlHead pageTitle='Reviews'/><ContentLoader text='loading...'/> <HtmlFoot/> </>)
    }
    if(data.userProfile === 'not-found' || user_type !== data.userProfile.type){// the check is valid here because userProfile loads from server not on frontend
      return (<> <HtmlHead pageTitle='Reviews'/><div>User Not Found</div> <HtmlFoot/> </>)
    }
    if(data.loggedInUserProfile.id === data.userProfile.id){
      return (<> <HtmlHead pageTitle='Reviews'/><div>You cannot rate yourself...</div> <HtmlFoot/> </>)
    }
    return (
    <>
        <HtmlHead pageTitle='Reviews'/>
        <UpAndBackButton/>
            <div className="container h-100">
                <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="row no-gutters">
                        <div className="col-xl-12" >
                            {props.act === 'show'? <UserReview {...props} jwt={getJwt()} loggedInUserProfile={data.loggedInUserProfile} /> : <ReviewsForm 
                                                                                                                                                         loggedInUserProfile={data.loggedInUserProfile} 
                                                                                                                                                         jwt={getJwt()} 
                                                                                                                                                         api_url={api_url} 
                                                                                                                                                         userProfile={data.userProfile}/>}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        <HtmlFoot/>
        </>   
    )
}
