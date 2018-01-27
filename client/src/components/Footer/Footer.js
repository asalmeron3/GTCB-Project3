import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
const Footer = () => (

<div>
 <Segment
      vertical
      style={{ margin: '5em 0em 0em', padding: '1em 0em' }}
    >
      <Container textAlign='center'>
        <List horizontal divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
        <div>
        <img src="http://cesran.org/wp-content/uploads/2016/05/n-DEMOCRACY-VOTING-HANDS-628x314.jpg"  alt="hands photo"  height="10%" width="10%"/>
        </div>
      </Container>
    </Segment>
  </div>

	)

export default Footer;