import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CardExample = props => (
  <Card raised>
    <Image src={props.photoUrl} />
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
)

export default CardExample;