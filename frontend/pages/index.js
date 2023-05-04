import HtmlHead from '../components/Meta/HtmlHead'
import HtmlFoot from '../components/Meta/HtmlFoot'
import Content from '@/components/Parts/Content'
import React from 'react';
import { api_url,driver_populate_url,getJwt } from '@/Constants';
import PageLoader from '@/components/Includes/PageLoader'
import ContentLoader from '@/components/Includes/ContentLoader'

async function getLoggedInUserData(){
  if(getJwt() === null) return 'logged-out' // you are looged out
  console.log(getJwt())
  let url
  const user = await fetch(api_url+'/users/me',{
    headers: {
      'Authorization': `Bearer ${getJwt()}`,
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error))
    //.catch(error => return 'logged-out')
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

export default function Home() {
  const [data, setData] = React.useState({
    loading: true,
    loggedInUserProfile: null,
  }); // initializing state
  React.useEffect(() => {
     async function fetchData() {
        const loggedInUserProfile = await getLoggedInUserData();
        console.log(loggedInUserProfile)
        setData({
          loading: false,
          loggedInUserProfile: loggedInUserProfile || null
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <HtmlHead pageTitle='Homepage'/>
      {data.loading? <><PageLoader /><ContentLoader text="DRIVERBASE"/></> : <Content 
                                                                                     loggedInUserProfile={data.loggedInUserProfile}
                                                                                     api_url={api_url}
                                                                                     jwt={getJwt()}/>}
      <HtmlFoot/>
    </>
  )
}
