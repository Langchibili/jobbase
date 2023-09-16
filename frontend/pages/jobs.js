import React, { Component } from 'react';
import HtmlHead from '@/components/Meta/HtmlHead'
import HtmlFoot from '@/components/Meta/HtmlFoot'
import JobsAddForm from '@/components/Forms/JobsAddForm';
import ItemListAll from '@/components/Lists/ItemListAll';
import { api_url,getJwt } from '@/Constants';
import { useRouter } from 'next/router';
import PageLoader from '@/components/Includes/PageLoader';
import ContentLoader from '@/components/Includes/ContentLoader';
import JobView from '@/components/Includes/JobView';
import UpAndBackButton from '@/components/Includes/UpAndBackButton';


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
    const user = await fetch(api_url+'/users/me?populate=carOwnerProfile,carOwnerProfile.details,carOwnerProfile.jobs',{
    headers: {
    'Authorization': `Bearer ${getJwt()}`,
    'Content-Type': 'application/json'
    }
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
      return user
}

function renderJobView(act,data,jid){
  if(act === 'show'){
    return <JobView 
              jid={jid} 
              api_url={api_url} 
              jwt={getJwt()} 
              loggedInUserProfile={data.loggedInUserProfile} />
  }
  else if(act === 'show-all'){
    return <ItemListAll
        loggedInUserProfile={data.loggedInUserProfile}
        itemsName='jobs'
        listType='jobs'
        listTitle='Jobs Available'
        act='show-all'
        api_url={api_url}
         />
  }
  else if(act === 'edit' || act === 'delete'){
    if(data.loggedInUserProfile === undefined) return <div>Nothing to show here</div>
    if('carOwnerProfile' in data.loggedInUserProfile){
        return <ItemListAll
        loggedInUserProfile={data.loggedInUserProfile}
        itemsName='jobs'
        listType='jobs'
        listTitle='Jobs Available'
        act={act}
        api_url={api_url}
        reqUrlPath={'/car-owner-profiles/'+data.loggedInUserProfile.carOwnerProfile.id+'?populate=jobs'}
        />
      }
      else{
          return <>Your Profile Isn't updated enough</>
      }
  }
  else if(act === 'add'){
    if(data.loggedInUserProfile === undefined) return <div>Nothing to show here</div>
    if('carOwnerProfile' in data.loggedInUserProfile){
        const jobCreationPoints = data.loggedInUserProfile.carOwnerProfile.job_creation_points 
        if(jobCreationPoints < 5){
          let tip = ''
          if(data.loggedInUserProfile.profile_completion_percentage < 75) tip = ', Or try Updating your profile with more details to Earn free points'
          if(data.loggedInUserProfile.profile_completion_percentage === 75) tip = ', Or try verifying your account to Earn 20 free points!'
          return <>You have insuficient job creation points to post a job. Please buy more{tip}</>
        }
        return <JobsAddForm loggedInUserProfile={data.loggedInUserProfile} api_url={api_url} jwt={getJwt()}/>
    }
   }
}

export default function jobs(props) {
    const router = useRouter();
    const { uid, act, jid } = router.query;
    const [data, setData] = React.useState({loading: true, loggedInUserProfile: null});
    
    // set loggedin user data state
      React.useEffect(() => {
        if(act === 'add' || act === 'edit' || act === 'delete'){ 
          async function fetchData() {
            const loggedInUserProfile = await getLoggedInUserData() 
            setData({ loading: false, loggedInUserProfile: loggedInUserProfile });
          }
          fetchData();
        } 
        else if(act === 'show' || act === 'show-all'){
          setData({ loading: false});
        }
      }, [act]);
    
    
    if (data.loggedInUserProfile === 'logged-out') window.location = '/login' // you should re-log in
    
    if (data.loading || data.loggedInUserProfile === null) {
        return (<> <PageLoader /><HtmlHead pageTitle='Jobs'/><ContentLoader text='loading...'/> <HtmlFoot/> </>)
    }
    
    else{
        if(act === 'add' && data.loggedInUserProfile.type !== 'car-owner'){
          return (<> <HtmlHead pageTitle='Jobs'/><UpAndBackButton/><div>Only Employers, such as Car Owners Can Create Jobs</div> <HtmlFoot/> </>)
        }
        return (
         <>
            <HtmlHead pageTitle='Jobs'/>
            <UpAndBackButton/>
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                    <div className="col-md-6">
                        <div className="row no-gutters">
                            <div className="col-xl-12" >
                                {renderJobView(act,data,jid)}
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
