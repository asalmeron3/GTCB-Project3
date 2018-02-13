import React, { Component } from "react";
import SignUp from "../../components/SignUp";
import API from "../../utils/API";
import { Link  } from 'react-router';
import axios from 'axios';
import LandingPage from "../LandingPage/LandingPage";


class Login extends Component {
  // Setting our component's initial state
  state = {
    username: "",
    Lpassword: "",
    name: "",
    Semail: "",
    sPwd1: "",
    sPwd2: "",
    msgHeader:"",
    msgContent:""
  };

  handleUsernameChange = (e) =>{
    this.setState({username: e.target.value});
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
    this.setState({msgHeader: ""});
    this.setState({msgContent: ""});
    this.setState({sPwd1: e.target.value});
  };
  handlesPwd2= (e) => {
    this.setState({msgHeader: ""});
    this.setState({msgContent: ""});
    this.setState({sPwd2: e.target.value});
  };


  handleLogin = event => {
    event.preventDefault();
    var info = {
      username: this.state.username.trim(),
      password : this.state.Lpassword.trim()
    };
    //console.log(info);
    API.loginUser(info);
    axios.post('api/auth/login', info)
    .then((response) => {
      //console.log(response);
      localStorage.setItem('jwtToken', response.data.token);
      window.location.replace('/UserPage');
    });
  };

  handleSignUp = event => {
    event.preventDefault();
    if(this.state.sPwd1!=this.state.sPwd2){
      this.setState({msgHeader: "Error"});
      this.setState({msgContent: "Your Passwords do not match!"});
    }
    else{
      var info = {
        name: this.state.name.trim(),
        email: this.state.Semail.trim(),
        password : this.state.sPwd1.trim(),
        username:this.state.Semail.split("@")[0],
        picURL:"www.shackmanlab.org/wp-content/uploads/2013/07/person-placeholder.jpg"
      };
      //console.log(info);
      API.addUser(info);
      axios.post('api/auth/signup', info)
      .then((response) => {
        //console.log(response);
        localStorage.setItem('jwtToken', response.data.token);
        localStorage.setItem('username', this.state.username);
        window.location.replace('/UserPage');
      });
    }   
  };

  

  render() {
  	return(
  		<SignUp 
        msgHeader = {this.state.msgHeader}
        msgContent = {this.state.msgContent}
        handleLogin = {this.handleLogin} 
        handleSignUp = {this.handleSignUp}
        handleUsernameChange = {this.handleUsernameChange}
        handleLPasswordChange = {this.handleLPasswordChange}
        handleNameChange = {this.handleNameChange}
        handleSEmailChange = {this.handleSEmailChange}
        handlesPwd1 = {this.handlesPwd1}
        handlesPwd2 = {this.handlesPwd2}
      />
  		);
  }
}

export default Login;