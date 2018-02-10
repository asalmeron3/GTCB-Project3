import React from 'react'
import './Footer.css';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
const Footer = () => (

<Grid.Row style={{background:"white"}}>
      <div textAlign='center' id="down">
        <br/>
        <List horizontal divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </div>
      <br/>
  </Grid.Row>


	)

export default Footer;