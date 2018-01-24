import React from "react";
import './Header.css';
import {Container, Divider, Dropdown, Grid, Image, List, Menu, Segment,Icon,Button} from 'semantic-ui-react';


const Header = () =>
  <div>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <div className="ui left floated huge header" style = {{margin: "11px"}}>
          <a href="/" className="navbar-brand">
            GoVoRep
          </a>
        </div>
        <div className="ui right floated header" style = {{margin: "15px"}} >
        Logout Coming Soon
        </div>
        <Grid style = {{margin: "auto"}}>
          <Grid.Row columns={3}>
            <Grid.Column><Button><a href="/">Home Page</a></Button></Grid.Column>
            <Grid.Column><Button><a href="/Landing">Landing Page</a></Button></Grid.Column>
            <Grid.Column><Button><a href="/UserPage">User Page</a></Button></Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="ui clearing divider"></div>
      </div>
      
    </div>
  </nav>
  </div>

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