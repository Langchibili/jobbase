import React, { Component } from 'react';
import Drivers from './Drivers';
import CarOwners from './CarOwners';
import Jobs from './Jobs';
import Strapi from 'strapi-sdk-javascript'
import ContentLoader from '../Includes/ContentLoader';
import Link from 'next/link';
import { RecommendSharp } from '@mui/icons-material';

class List extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      requesting:true
    };
    this.strapi = new Strapi(this.props.api_url);
  }

  getItems = async (reqUrl)=>{
    const itemsName = this.props.itemsName
    const items = await fetch(reqUrl,{
      headers: {
        'Content-Type': 'application/json'
      }
     }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
      //meta.pagination
      if(items !== undefined){
        if('data' in items){
          return items.data;
        }
        else if(itemsName === 'users'){
          return items
        }
      }
      
      return []
  }
 
 async componentDidMount(){
    let items
    if(this.props.items && this.props.itemsName === 'users'){
        items = this.props.items
    }
    else{
      if(this.props.itemsName === 'users'){
        const users = await this.getItems(this.props.api_url+this.props.reqUrlPath) // get initial items  
        let listType 
        if(this.props.listType === 'drivers'){ // trying to get the user type from the list type prop
             listType = 'driver'
        } 
        else if(this.props.listType  === 'car-owners'){ // same thing here
             listType = 'car-owner'
        }
        else{
            listType = this.props.listType
        }
        // filter users
        items = users.filter((user)=>(user.profile_completion_percentage > 9 && user.type === listType))
        items = users.filter((user)=>{
          if(user.type === "driver"){
              if(user.driverProfile !== undefined){ 
                if(user.driverProfile !== null){
                   if(user.driverProfile.details !== null) {
                      if(user.driverProfile.details.ratings !== null) return user.driverProfile.details.ratings.length > 0
                  }
                }
              }
          }
          else{
            if(user.carOwnerProfile !== undefined){
              if(user.carOwnerProfile !== null){
                 if(user.carOwnerProfile.details !== null) {
                    if(user.carOwnerProfile.details.ratings !== null) return user.carOwnerProfile.details.ratings.length > 0
                }
              }
            }
          }
        })
        items = items.slice(0,10) // limit to 10 items
      }
      else{
        items = await this.getItems(this.props.api_url+this.props.reqUrlPath) // get initial items  
      } 
    }
    this.setState({requesting: false, items:items},()=>{
      //  console.log(this.state.items)
    })
    // if(items.length > 0){// if items are not found or zero
    //   this.setState({requesting: false, items:items},()=>{
    //     console.log(this.state.items)
    //   })
    // }
  }
  
  renderList = ()=> {
    const listType = this.props.listType
    if(this.props.itemsName === 'users'){
        if(listType === 'drivers') return <Drivers drivers={this.state.items} {...this.props} listAll={false}/>
        if(listType === 'car-owners') return <CarOwners carOwners={this.state.items} {...this.props} listAll={false}/>     
    }
    else if(this.props.itemsName === 'jobs'){
        if(listType === 'jobs') return <Jobs jobs={this.state.items} {...this.props} />
    }
    return <></>
  }
  
  render() {
    // set view more link
    let allContentUrl = this.props.listType === 'car-owners'? "/car_owners" : "/"+this.props.listType
    allContentUrl = allContentUrl === '/jobs'? allContentUrl+"?act=show-all" : allContentUrl
    return (
     <div className="card">
      <div className="card-header  border-0 pb-0">
        <h4 className="card-title">{this.props.listTitle}</h4>
        {this.props.listTitle === "Recommended Drivers" && !this.state.requesting? <img src='/recomendedimage.png' style={{width:50,height:50}} alt="badge"/> : ''}
      </div>
      <div className="card-body"> 
          {this.state.requesting? <ContentLoader/> : this.renderList()}
          {this.props.hideViewMoreButton? <></> : <div className="d-sm-flex align-items-center mb-3 mt-sm-0 mt-2"><h4 className="text-black fs-20 me-auto"></h4><Link onClick={this.props.handlePageChange} style={{backgroundColor:'transparent'}} className="btn light btn-rounded" href={allContentUrl}>View More<svg className="ms-3" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5607 5.93941L18.2461 0.62482C17.9532 0.331898 17.5693 0.185461 17.1854 0.185461C16.8015 0.185461 16.4176 0.331898 16.1247 0.62482C15.539 1.21062 15.539 2.16035 16.1247 2.74615L18.8787 5.50005L1.5 5.50005C0.671578 5.50005 0 6.17163 0 7.00005C0 7.82848 0.671578 8.50005 1.5 8.50005L18.8787 8.50005L16.1247 11.254C15.539 11.8398 15.539 12.7895 16.1247 13.3753C16.7106 13.9611 17.6602 13.9611 18.2461 13.3753L23.5607 8.06069C24.1464 7.47495 24.1464 6.52516 23.5607 5.93941Z" fill="lightgray"></path></svg></Link></div>}
      </div>
    </div>)
  }
}

export default List;

