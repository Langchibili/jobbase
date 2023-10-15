import React, { Component } from 'react';
import HtmlHead from '@/components/Meta/HtmlHead'
import HtmlFoot from '@/components/Meta/HtmlFoot'
import { getLoggedInUserData } from '@/Constants';
import UpAndBackButton from '@/components/Includes/UpAndBackButton';
import ChangePassword from '@/components/Forms/SettingsForms/ChangePassword';


export default function Settings(props) {
    const [data, setData] = React.useState({loading: true, loggedInUserProfile: null});
    
    // set loggedin user data state
      React.useEffect(() => {
          async function fetchData() {
            const loggedInUserProfile = await getLoggedInUserData() 
            console.log('logged in user from source>',data.loggedInUserProfile)
            setData({ loading: false, loggedInUserProfile: loggedInUserProfile });
          }
          fetchData();
      }, []);
    
    
   // if (data.loggedInUserProfile === 'logged-out') window.location = '/login' // you should re-log in
    
    if (data.loading || data.loggedInUserProfile === null) {
        return (<> <PageLoader /><HtmlHead pageTitle='Jobs'/><ContentLoader text='loading...'/> <HtmlFoot/> </>)
    }
    
    else{
        return (
         <>
            <HtmlHead pageTitle='Settings'/>
            <UpAndBackButton/>
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="row no-gutters">
                            <div className="col-xl-12" style={{marginTop:10}}>
                                <ChangePassword/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            <HtmlFoot/>
            </>   
        )
     }
}
