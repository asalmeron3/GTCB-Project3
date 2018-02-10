import React from 'react';
import { Card, Icon, Image,Grid,Segment } from 'semantic-ui-react';
import "./card.css";
const CardExample = props => (
  <Grid.Column mobile={16} tablet={8} computer={5} largeScreen={5} wideScreen={5}>
  <Card onClick={props.handleOpen} style = {{margin:"10px"}} className="resultCard">
    <div className = "wrapper" style = {{background:props.theColor}}>
    <div className = "squareFrame" style = {{background:props.theColor}}>
      <div className = "imageContainer1">
      <Image src={props.photoUrl} className = "repImg"/>
      </div>
    </div>
    </div>
    <Card.Content>
      <Card.Header>
       {props.name}
      </Card.Header>
      <Card.Meta>
        <span>
          {props.party}
        </span>
      </Card.Meta>
      <Card.Description>
        <p>"Seniority" {props.seniority} </p>
        <p>"Expiration Date: " {props.expiration} </p>
        <p>"Number of Sponsored Bills: " {props.sponsored} </p>
        <p>"Missing Votes: " {props.votemissed} </p>
        <a href={props.urls} target="_blank"><Icon name='home' />HomePage</a>
        <a href={prop.contact} target="_blank"}><Icon name='mail outline'/>Contact</a>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a  href={`https://www.twitter.com/${props.twitter}`} target="_blank">
        <Icon name='twitter' />
      </a>
      <a  href={`https://www.facebook.com/${props.facebook}`} target="_blank">
        <Icon name='facebook' />
      </a>
    </Card.Content>
  </Card>
  </Grid.Column>
)

export default CardExample;