import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import LogoArea from './LogoArea';
import SideNav from './SideNav';
import List from '../Lists/List';
import { car_owner_populate_url, minimal_driver_populate_url} from '@/Constants';
import PageLoader from '../Includes/PageLoader';
import ProfileUpdatePercent from '../Includes/ProfileUpdatePercent';
import DriversCount from '../Includes/CountsDisplay/DriversCount';
import CarOwnersCount from '../Includes/CountsDisplay/CarOwnersCount';
import JobsCounts from '../Includes/CountsDisplay/JobsCounts';
import FeaturedCarOwners from '../Includes/FeaturedContent/FeaturedCarOwners';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
       linkClicked: false
    };
  }

  handlePageChange = (e)=>{
    window.location = '#'
    this.setState({
      linkClicked: true
    })
  }
  // componentDidMount{
  //   document.body.
  // }
  render() {
  return( 
  <>

  {/***********************************
  Main wrapper start
    ************************************/}
  <div id="main-wrap">
  {this.state.linkClicked? <PageLoader/> : ''}
    {/***********************************
      Nav header start
  ************************************/}
   <LogoArea loggedInUserProfile={this.props.loggedInUserProfile} handlePageChange={this.handlePageChange}/>
    {/***********************************
      Nav header end
  ************************************/}
    {/***********************************
    
      Chat box End
  ************************************/}
    {/***********************************
      Header start
  ************************************/}
    <Header 
    handlePageChange={this.handlePageChange}
    linkClicked={this.state.linkClicked} 
    api_url={this.props.api_url} 
    loggedInUserProfile={this.props.loggedInUserProfile}/>
    {/***********************************
      Header end ti-comment-alt
  ************************************/}
    {/***********************************
      Sidebar start
  ************************************/}
    <SideNav loggedInUserProfile={this.props.loggedInUserProfile} handlePageChange={this.handlePageChange}/>
    {/***********************************
      Sidebar end
  ************************************/}
    {/***********************************
      Content body start
  ************************************/}
    <div className="content-body pt-4">
      {/* row */}
      <div className="container-fluid">
        <div className="row">
           {this.props.loggedInUserProfile !== 'logged-out'?<ProfileUpdatePercent 
               loggedInUserProfile={this.props.loggedInUserProfile}
               handlePageChange={this.handlePageChange}
               api_url={this.props.api_url}
               jwt={this.props.jwt}/>:''}
               
          <div className="col-xl-4 col-xxl-6 col-lg-6">
              <List 
              loggedInUserProfile={this.props.loggedInUserProfile}
              handlePageChange={this.handlePageChange}
              itemsName ='jobs'
              reqUrlPath='/jobs?populate=car_owner_profile&pagination[limit]=8&sort=id%3Adesc&meta=true'
              api_url={this.props.api_url}
              listType='jobs' 
              listTitle='Latest Jobs'/>
          </div>
          <div className="col-xl-4 col-xxl-6 col-lg-6">
              <List 
              loggedInUserProfile={this.props.loggedInUserProfile}
              handlePageChange={this.handlePageChange}
              itemsName ='users'
              reqUrlPath={'/users?'+minimal_driver_populate_url+'&sort=id%3Adesc'}
              api_url={this.props.api_url}
              listType="drivers" 
              listTitle='Top Professionals'/>
           </div> 

           <div className="col-xl-4 col-xxl-6 col-lg-6">
              <List 
              loggedInUserProfile={this.props.loggedInUserProfile}
              handlePageChange={this.handlePageChange}
              itemsName ='users'
              reqUrlPath={'/users?'+car_owner_populate_url+'&sort=id%3Adesc'}
              api_url={this.props.api_url}
              listType='car-owners' 
              listTitle='Job Owners'/>
           </div>
          <DriversCount  api_url={this.props.api_url} handlePageChange={this.handlePageChange}/>
          <CarOwnersCount api_url={this.props.api_url} handlePageChange={this.handlePageChange}/>
          <JobsCounts api_url={this.props.api_url} handlePageChange={this.handlePageChange}/>
         
          <div className="col-xl-12 col-xxl-12 col-sm-12">
              <a href="https://driverbase.app" onClick={this.props.handlePageChange}>
                <div className="card bg-white">
                <div className="card-body">
                    <div className="media align-items-center">
                    <span className="p-3 me-3 feature-icon rounded">
                        {/* <svg width={36} height={36} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.4998 10.4995H35.0002V38.4999H38.4998C40.4245 38.4999 42 36.9238 42 34.9992V13.9992C42 12.075 40.4245 10.4995 38.4998 10.4995Z" fill="white" />
                        <path d="M27.9998 10.4995V6.9998C27.9998 5.07515 26.4243 3.49963 24.5001 3.49963H17.4998C15.5756 3.49963 14.0001 5.07515 14.0001 6.9998V10.4995H10.5V38.4998H31.5V10.4995H27.9998ZM24.5001 10.4995H17.4998V6.99929H24.5001V10.4995Z" fill="white" />
                        <path d="M3.50017 10.4995C1.57551 10.4995 0 12.075 0 13.9997V34.9997C0 36.9243 1.57551 38.5004 3.50017 38.5004H6.99983V10.4995H3.50017Z" fill="white" />
                        </svg> */}
                        <img style={{width:90,height:90}} src="/DriverBaseJobBaseLogoWithBackground.png" alt />
                    </span>
                    <div className="media-body text-bottom">
                        <p className="fs-18 text-primary mb-2">Check out Drivers, Car Owners and more exclusive Jobs on Driverbase</p>
                        {/* <span className="fs-48 text-white font-w600">{this.state.jobsCount? this.state.jobsCount : <ContentLoader />}</span> */}
                    </div>
                    </div>
                </div>
                </div>
            </a>
          </div>
          <FeaturedCarOwners api_url={this.props.api_url} handlePageChange={this.handlePageChange}/>
        </div>
      </div>
    </div>
    {/***********************************
      Content body end
  ************************************/}
    {/***********************************
      Footer start
  ************************************/}
    <Footer />
    {/***********************************
      Footer end
  ************************************/}
    {/***********************************
      ticket button start
  ************************************/}
    {/***********************************
     Support ticket button end
  ************************************/}
  </div>
  {/***********************************
  Main wrapper end
    ************************************/}
  </>
      )
  }
}

export default Content;
