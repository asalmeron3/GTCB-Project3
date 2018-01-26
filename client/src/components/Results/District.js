import React from 'react';
import { Header } from 'semantic-ui-react';

const HeaderExampleBlock = props => (
  <Header as='h3' block>
    {props.cd}
  </Header>
)

export default HeaderExampleBlock;