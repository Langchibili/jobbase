import Link from 'next/link';
import React, { Component } from 'react';
import ContentLoader from '../Includes/ContentLoader';
const fakeStr1 = 'kahs3lahebblo2uwb00an~#va5lwi_ad_fgaljdj'; // security stuff
const fakeStr2 ='klahewi_ad_fgalloanv;;aitalkjfajhsbbluwba==hn3vajd5j=+;'
 
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        error: <></>,
        errorExists: true,
        submitting: false,
        submittingText:'SignUp',
        user_type: this.props.user_type || null
    };
    this.username = React.createRef();
    this.password = React.createRef();
}
  
 handleChange = ()=>{
    this.setState({
        error: <></>,
        errorExists: false,
        submitting: false
    })
 }
 handleSubmit = async (e)=>{
    e.preventDefault()
    let user = {}
    const username = this.username.current.value;
    const password = this.password.current.value;
    if(username.length < 1 || password.length < 1){
        this.setState({
            error: <span class='text-danger'>username or password empty!</span> 
        })
        return
    }
    else{
        this.setState({
            error: <></>,
            errorExists: false
        })
    }
    user.type = this.props.user_type
    user.username = username
    user.password = password
    user.email = username+'_unset@email.com'
    
    if(!this.state.errorExists){
        this.setState({
            submitting: true,
            submittingText: 'siging you up...'
        })
        const response = await this.submitRequest(user)
        if(response === undefined){
            this.setState({
                error: <span class='text-danger'>network error!</span>,
                errorExists:true 
            })
            return
        }
        if('error' in response){
            this.setState({
                error: <span class='text-danger'>{response.error.message}</span>,
                errorExists:true 
            })
            return
        }
        
        if('jwt' in response){
            const newUser = response.user
            let profileObject,profileAddUrl
            // update the new user and add the profile and the details
            if(newUser.type === 'driver'){
                profileAddUrl = this.props.api_url+'/driver-profiles'
                profileObject = {
                    data: {
                        userid:newUser.id,
                        application_points: 10,
                        details:{
                            id:0,
                            firstname:null,
                            lastname:null,
                            gender:null,
                            age:null,
                            about:null,
                            phone_number: null,
                            whatsapp_number:null,
                            address:{
                                id:0,
                                city:null,
                                town:null,
                                provinnce:null,
                                location:null
                            },
                            ratings:[]
                        }
                    }
                }
            }
            else{
                profileAddUrl = this.props.api_url+'/car-owner-profiles'
                profileObject = {
                    data: {
                        userid:newUser.id,
                        details:{
                            id:0,
                            firstname:null,
                            lastname:null,
                            gender:null,
                            age:null,
                            about:null,
                            phone_number: null,
                            whatsapp_number:null,
                            address:{
                                id:0,
                                city:null,
                                town:null,
                                provinnce:null,
                                location:null
                            },
                            ratings:[]
                        }
                    }
                }
            }
        // create a new userProfile
        const userProfile = await this.createProfile(profileObject,profileAddUrl,response.jwt)
       
        let userUpdateObject
        if(newUser.type === 'driver'){
             userUpdateObject = {
                id: newUser.id, driverProfile:userProfile.data.id
            }
        }
        else{
             userUpdateObject = {
                id: newUser.id, carOwnerProfile:userProfile.data.id
            }
        }
        // add newly created userProfile to newly added user
        const updatedUser = await fetch(this.props.api_url+'/users/'+newUser.id, {
            method: 'PUT',
            headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${response.jwt}`
            },
            body: JSON.stringify(userUpdateObject),
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Error:', error);
        });
        
        const jwt = localStorage.getItem('jwt')
        if(jwt === undefined || jwt === null){
            localStorage.setItem("jwt", fakeStr1+response.jwt+fakeStr2)
        }
        else{
            localStorage.removeItem('jwt')
            localStorage.setItem("jwt", fakeStr1+response.jwt+fakeStr2)
        }
            window.location = '/profile'
        }
    }
 }

  createProfile = async (profileObject,profileAddUrl,jwt)=>{
    return await fetch(profileAddUrl, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify(profileObject),
      })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
      });
  }

  submitRequest = async (registerObject)=>{
    return await fetch(this.props.api_url+'/auth/local/register', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerObject),
      })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  render() {
    return (
        <div className="auth-form">
                        <div className="text-center mb-3">
                        <a href="index.html"><img src="images/logo-full.png" alt /></a>
                        </div>
                        <h4 className="text-center mb-4 text-white">Sign up your account</h4>
                        <form>
                        <div className="form-group">
                            <label className="mb-1 text-white"><strong>Username</strong></label>
                            <input onChange={this.handleChange} type="text" ref={this.username} className="form-control" placeholder="username" />
                        </div>
                        {/* <div className="form-group">
                            <label className="mb-1 text-white"><strong>Email</strong></label>
                            <input type="email" className="form-control" placeholder="hello@example.com" />
                        </div> */}
                        <div className="form-group">
                            <label className="mb-1 text-white"><strong>Password</strong></label>
                            <input type="password" ref={this.password} className="form-control"/>
                        </div>
                        <div className="text-center mt-4">
                            <button disabled={this.state.submitting} onClick={this.handleSubmit} className="btn bg-white text-primary btn-block">{this.state.submittingText}</button>
                        </div>
                        </form>
                        <div className="new-account mt-3">
                        <p className="text-white">Already have an account? <Link className="text-white" href="/login">Sign in</Link></p>
                        </div>
                        <div>{this.state.error}</div>
                    </div>
   );
}
}

export default SignUpForm;

