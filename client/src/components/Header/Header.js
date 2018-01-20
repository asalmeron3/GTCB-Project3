import React from "react";
import './Header.css';

const Header = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="ui left floated huge header">
        GoVoRep
        </div>
        <a href="/auth/login" className="ui basic button right floated header" >
        SignUp/Signin
        </a>
        <div className="ui clearing divider"></div>
      </div>
      
    </div>
  </nav>;

export default Header;