import React, { Component } from "react";
import SignUp from "../../components/SignUp";
import API from "../../utils/API";


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
    var info = {
      email: this.state.Lemail,
      password : this.state.Lpassword
    };
    console.log(info);

  };

  handleSignUp = event => {
    event.preventDefault();
    // fetch("/api/user/signup", {
    //   method: "post",
    //   headers: {'Content-Type':'application/json'},
    //   body: {
    //   "name": this.state.name,
    //   "email": this.state.Semail,
    //   "password":this.state.sPwd1
    //    }
    //  });
    // };
    var info = {
      name: this.state.name,
      email: this.state.Semail,
      password : this.state.sPwd1
    };
    API.addUser(info)
      .then(res => console.log("added the user?"))
      .catch(err => console.log(info + " at login.js . error: " + err ));
  };
  render() {
  	return(
  		<SignUp 
        handleLogin = {this.handleLogin} 
        handleSignUp = {this.handleSignUp}
        handleLEmailChange = {this.handleLEmailChange}
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