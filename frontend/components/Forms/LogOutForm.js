import React, { Component } from 'react';

export default  class LogOutFOrm extends Component {
  constructor(props) {
    super(props);
   }

  componentDidMount(){
    localStorage.removeItem('jwt')
    localStorage.setItem("jwt", 'o') // set the jwt to null, to log user out
    location = '/'
  }

  render(){return <>Logging you out...</>}
}
