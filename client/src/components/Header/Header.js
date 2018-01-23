import React from "react";
import './Header.css';
import {Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment} from 'semantic-ui-react'

const Header = () =>
  
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="ui left floated huge header">
        GoVoRep
        </div>
        <a href="/login" className="ui basic button right floated header" >
        SignUp/Signin
        </a>
        <div className="ui clearing divider"></div>
      </div>
      
    </div>
  </nav>;

 // <div>
 //  <Menu fixed='top' inverted>
 //    <Container>
 //      <Menu.Item as = 'a' header>
 //        <Image 
 //          size='mini'
 //          src='http://www.clker.com/cliparts/2/9/Q/8/j/f/government-building-icon-hi.png'
 //          style={{ marginRight: '1.5em' }}
 //        />
 //      GoVoRep
 //        <Menu.Item className='item'>
 //          <Button as='a' secondary>Sign in/Sign up</Button>
 //        </Menu.Item>
 //      </Menu.Menu> 

 //    </Container>
 //  </Menu>
 //  </div>

export default Header;