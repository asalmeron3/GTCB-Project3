import React from "react";
import './Header.css';
import {Container, Divider, Dropdown, Grid, Image, List, Menu, Segment,Icon,Button} from 'semantic-ui-react';


const Header = () =>
  <div>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="ui left floated huge header" style = {{margin: "11px"}}>
          <a href="/UserPage" className="navbar-brand" id="red">
            Gov
          </a>
          <a href="/UserPage" className="navbar-brand" id="blue">
            Rep
          </a>
        </div>
        <div className="ui right floated header" style = {{margin: "15px"}} >
        <Button basic color="black" size="Large" id="login"><a href="/">Logout</a></Button>
        </div>
        <div className="ui clearing divider"></div>
      </div>
      
    </div>
  </nav>
  </div>

 // <div>
 //  <Menu fixed='top'>
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