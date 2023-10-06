import UpAndBackButton from '@/components/Includes/UpAndBackButton';
import React from 'react';
import Alert from '@mui/material/Alert'; 
import InitialAccountSetUp from '@/components/Forms/InitialAccountSetUp';
import PageLoader from '@/components/Includes/PageLoader';
import ContentLoader from '@/components/Includes/ContentLoader';
import { getLoggedInUserData } from '@/Constants';

export default function Welcome() {
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
      data.loading? <><PageLoader /><ContentLoader text="DRIVERBASE"/></> : <>
      <UpAndBackButton/>
      <InitialAccountSetUp loggedInUserProfile={data.loggedInUserProfile}/>
      </>
  )
}