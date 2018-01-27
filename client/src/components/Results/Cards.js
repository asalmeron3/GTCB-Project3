import React from 'react';
import { Card, Icon, Image,Grid } from 'semantic-ui-react';
import "./card.css";
const CardExample = props => (
  <Grid.Column width= {4}>
  <Card>
    <div className = "wrapper" style = {{background:"lightgray"}}>
    <div className = "squareFrame">
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
      <a href={props.urls}>Profile</a>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a  href={`https://www.twitter.com/${props.twitter}`}>
        <Icon name='twitter' />
      </a>
      <a  href={`https://www.facebook.com/${props.facebook}`}>
        <Icon name='facebook' />
      </a>
    </Card.Content>
  </Card>
  </Grid.Column>
)

export default CardExample;