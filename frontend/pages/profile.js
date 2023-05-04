import React from 'react';
import { useRouter } from 'next/router';
import HtmlHead from '@/components/Meta/HtmlHead'
import HtmlFoot from '@/components/Meta/HtmlFoot'
import { api_url,driver_populate_url,getJwt } from '@/Constants';
import ProfileUpdateForm from  '@/components/Forms/ProfileUpdateForm'
import UserProfile from '@/components/Includes/UserProfile';
import ContentLoader from '@/components/Includes/ContentLoader';
import PageLoader from '@/components/Includes/PageLoader';

async function getUserProfile(uid,user_type) {
    let url,userProfile
    if(uid && user_type){ // if queries object empty
        if(user_type === 'driver') url = api_url+'/users/'+uid+'/?'+driver_populate_url
        if(user_type === 'car-owner') url = api_url+'/users/'+uid+'/?populate=carOwnerProfile,carOwnerProfile.details,carOwnerProfile.details.address,carOwnerProfile.details.profile_cover_image,carOwnerProfile.details.profile_thumbnail_image'
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

  async function getLoggedInUserData(uid,user_type){
        if(getJwt() === null && !uid && !user_type) return null 
        if(getJwt() === null) return 'logged-out' // you are looged out
        let url
        const user = await fetch(api_url+'/users/me',{
          headers: {
            'Authorization': `Bearer ${getJwt()}`,
            'Content-Type': 'application/json'
          }
        }).then(response => response.json())
          .then(data => data)
          .catch(error => console.error(error))
         // get user first to check type, coz we don't know whether user is a driver or car owner
        if(user.type === 'driver') url = api_url+'/users/me/?'+driver_populate_url
        if(user.type === 'car-owner') url = api_url+'/users/me/?populate=carOwnerProfile,carOwnerProfile.details,carOwnerProfile.details.address,carOwnerProfile.details.profile_cover_image,carOwnerProfile.details.profile_thumbnail_image'
        
        return await fetch(url,{
          headers: {
            'Authorization': `Bearer ${getJwt()}`,
            'Content-Type': 'application/json'
          }
         }).then(response => response.json())
          .then(data => data)
          .catch(error => console.error(error))
  }

  export default function Profile(props) {
    const router = useRouter();
    const { uid, user_type } = router.query;
    const [data, setData] = React.useState({
      loading: true,
      userProfile: null,
      loggedInUserProfile: null,
    }); // initializing state

    React.useEffect(() => {
      if(uid || user_type || uid === undefined || user_type === undefined){
       async function fetchData() {
          let userProfile
          const loggedInUserProfile = await getLoggedInUserData(uid,user_type);
          console.log(loggedInUserProfile)
          if(uid && user_type) userProfile = await getUserProfile(uid,user_type);
          setData({
            loading: false,
            loggedInUserProfile: loggedInUserProfile || null,
            userProfile: userProfile || null
          });
      }
      fetchData();
    }
    }, [uid, user_type]);

    if (data.loading) return ( <> <PageLoader/><HtmlHead pageTitle="Profile" /> <ContentLoader text='loading profile...'/><HtmlFoot /> </> );
     
    if (data.loggedInUserProfile !== null && data.userProfile === null && !uid && !user_type) {
        if (data.loggedInUserProfile === 'logged-out') window.location = '/login' // you should re-log in
        return (<><HtmlHead pageTitle="Profile" /><ProfileUpdateForm userProfile={data.loggedInUserProfile} jwt={getJwt()} api_url={api_url}/><HtmlFoot /></>);
    } 

    else if((uid && user_type && data.userProfile === 'not-found') || user_type !== data.userProfile.type){
      return ( <> <HtmlHead pageTitle="Profile" /> <div>User Not Found </div><HtmlFoot /> </> );
    }

    else if(uid && user_type && data.userProfile !== null && data.userProfile !== 'not-found'){
      return (<><UserProfile userProfile={data.userProfile} jwt={getJwt()} /></>);
    }
  }
  