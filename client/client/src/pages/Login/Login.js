import React, { Component } from "react";
import SignUp from "../../components/SignUp";

class Login extends Component {
  // Setting our component's initial state
  state = {
    Lemail: "",
    Lpassword: "",
    name: "",
    Semail: "",
    sPwd1: "",
    sPwd2: ""
  };

  handleLEmailChange = (e) =>{
    this.setState({Lemail: e.target.value});
  };
  handleLPasswordChange = (e) => {
    this.setState({Lpassword: e.target.value});
  };
  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  };
  handleSEmailChange= (e) => {
    this.setState({Semail: e.target.value});
  };
  handlesPwd1= (e) => {
    this.setState({sPwd1: e.target.value});
  };
  handlesPwd2= (e) => {
    this.setState({sPwd2: e.target.value});
  };


  handleLogin = event => {
    event.preventDefault();
  };

  handleSignUp = event => {
    event.preventDefault();
    var info = {
      name: this.name,
      email: this.email,
      pwd : this.sPwd1 + " " + this.sPwd2
    }
    console.log(info);
  };
  render() {
  	return(
  		<SignUp 
        handleLogin = {this.handleLogin} 
        handleSignUp = {this.handleSignUp}
        handleLEmailChange = {this.handleLEmailChange}
        handleLPasswordChange = {this.handleLPasswordChange}
        handleNameChange = {this.handleNameChange}
        handlesPwd1 = {this.handlesPwd1}
        handlesPwd2 = {this.handlesPwd2}
      />
  		);
  }
}

export default Login;