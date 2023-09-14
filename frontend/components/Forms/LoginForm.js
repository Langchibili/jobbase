import Link from 'next/link';
import React, { Component } from 'react';
const fakeStr1 = 'kahs3lahebblo2uwb00an~#va5lwi_ad_fgaljdj'; // security stuff
const fakeStr2 ='klahewi_ad_fgalloanv;;aitalkjfajhsbbluwba==hn3vajd5j=+;'
        
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        error: <></>,
        errorExists: true,
        submitting: false
    };
    this.username = React.createRef();
    this.password = React.createRef();
}
  

 handleSubmit = async (e)=>{
    e.preventDefault()
    let user = {}
    const username = this.username.current.value;
    const password = this.password.current.value;
    if(username.length < 1 || password.length < 1){
        this.setState({
            error: <span className='text-danger'>username or password empty!</span>,
            errorExists: true 
        })
    }
    else{
        this.setState({
            errorExists: false 
        })
    }
    user.identifier = username
    user.password = password
    
    if(this.state.errorExists === false){
        this.setState({submitting:true})// to disable button from re-requesting
        const response = await this.submitRequest(this.props.api_url,user) 
        const jwt = localStorage.getItem('jwt')
        if(jwt === undefined || jwt === null){
            localStorage.setItem("jwt", fakeStr1+response.jwt+fakeStr2)
        }
        else{
            localStorage.removeItem('jwt')
            localStorage.setItem("jwt", fakeStr1+response.jwt+fakeStr2)
        }
        if(response){
            if('user' in response){
                const user = response.user
                if(user.profile_completion_percentage === null || user.profile_completion_percentage === 0){
                    window.location = '/profile'
                }
                else{
                    window.location = '/profile?user_type='+user.type+'&uid='+user.id
                }
            }
            else{
                this.setState({ submitting: false, error: <span className="text-danger">{response.error.message}</span> })
            }
        }
    }
 }

  async submitRequest(url,user){
    return await fetch(url+'/auth/local',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
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
                <Link href="/"><img style={{width:60,height:60}} src="/DriverBaseTransparentBackground.png" alt /></Link>
                </div>
                <h4 className="text-center mb-4 text-white">Log Into Your Account</h4>
                <form>
                <div className="form-group">
                    <label className="mb-1 text-white"><strong>Username</strong></label>
                    <input type="text" ref={this.username} className="form-control" placeholder="username" />
                </div>
                <div className="form-group">
                    <label className="mb-1 text-white"><strong>Password</strong></label>
                    <input type="password" ref={this.password} className="form-control"/>
                </div>
                <div className="text-center mt-4">
                    <button disabled={this.state.submitting} onClick={this.handleSubmit} className="btn bg-white text-primary btn-block">{this.state.submitting? 'Logging you in...': 'Login'}</button>
                </div>
                </form>
                <div className="new-account mt-3">
                <p className="text-white">Don't have an account? <Link className="text-white" href="/signup">Sign Up</Link></p>
                </div>
                <div>{this.state.error}</div>
            </div>
   );
}
}

export default LoginForm;

