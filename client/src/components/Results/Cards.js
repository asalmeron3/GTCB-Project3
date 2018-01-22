import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CardExample = props => (
  <Card>
    <Image src={props.photoUrl} />
    <Card.Content>
      <Card.Header>
       {props.name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {props.party}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.urls}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {props.channels_type}
        {props.channels_id}
      </a>
    </Card.Content>
  </Card>
)

export default CardExample;