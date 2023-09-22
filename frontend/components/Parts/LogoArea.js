import Link from 'next/link';
import React, { Component } from 'react';
import MobileSideBAr from './MobileSideBar';


class LogoArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initial state goes here
    };
  }
  renderLogoSide = ()=>{
      if(window.innerWidth > 1040){
        if(window.location.pathname === '/'){
          return (
            <div className="nav-header">
               <Link href="/"><img style={{marginLeft:60,width:140,height:140}} src="/DriverBaseTransparentBackground.png" alt /></Link> 
            </div>)
        }
        else{
          return <MobileSideBAr loggedInUserProfile={this.props.loggedInUserProfile} handlePageChange={this.props.handlePageChange}/>
        }
      }
      else{
        return <MobileSideBAr loggedInUserProfile={this.props.loggedInUserProfile} handlePageChange={this.props.handlePageChange}/>
      }
  }

  render() { return this.renderLogoSide()}
}

export default LogoArea;
