import React from 'react'
import { Grid, Image, List } from 'semantic-ui-react'

const GridExampleResponsiveWidth = () => (
  <div>
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='/assets/images/wireframe/square-image.png' size='medium' circular />
          <List>
		    <List.Item icon='user' content='Name' />
		    <List.Item content='GA district 7' />
		   	<List.Item icon='home' content={<a href='address'>homepageaddress</a>} />
		    <List.Item icon='mail' content={<a href='mailto:jack@semantic-ui.com'>emailaddress</a>} />
		    <List.Item icon='twitter' content={<a href='http://www.semantic-ui.com'>@twitterID</a>} />
		    <List.Item icon='add user' content={<a href='http://www.semantic-ui.com'>Add Your Favorite</a>} />
		  </List>
      </Grid.Column>

      <Grid.Column mobile={16} tablet={8} computer={4}>
		<List>
		    <List.Item>
		      <List.Header>Bill</List.Header>
		      description
		    </List.Item>
		    <List.Item>
		      <List.Header>Bill</List.Header>
		      description
		    </List.Item>
		    <List.Item>
		      <List.Header>Bill</List.Header>
		      description
		    </List.Item>
		    <List.Item>
		      <List.Header>Bill</List.Header>
		      description
		    </List.Item>
		    <List.Item>
		      <List.Header>Bill</List.Header>
		      description
		    </List.Item>		    	    		    		    		    		    
	  	</List> 
      </Grid.Column>

      <Grid.Column mobile={16} tablet={8} computer={4}>
		<List>
		    <List.Item>
		      <List.Header>Headline</List.Header>
		      description
		    </List.Item>
		    <List.Item>
		      <List.Header>Headline</List.Header>
		      description
		    </List.Item>
		    <List.Item>
		      <List.Header>Headline</List.Header>
		      description
		    </List.Item>
		    <List.Item>
		      <List.Header>Headline</List.Header>
		      description
		    </List.Item>
		    <List.Item>
		      <List.Header>Headline</List.Header>
		      description
		    </List.Item>		    	    		    		    		    		    
	  	</List> 
      </Grid.Column>

      <Grid.Column mobile={16} tablet={8} computer={4}>
		<List>
		    <List.Item>
		      <List.Header>tweetcontents</List.Header>
		      tweetTime
		    </List.Item>
		    <List.Item>
		      <List.Header>tweetcontents</List.Header>
		      tweetTime
		    </List.Item>
		    <List.Item>
		      <List.Header>tweetcontents</List.Header>
		      tweetTime
		    </List.Item>
		    <List.Item>
		      <List.Header>tweetcontents</List.Header>
		      tweetTime
		    </List.Item>
		    <List.Item>
		      <List.Header>tweetcontents</List.Header>
		      tweetTime
		    </List.Item>		    		    		    		    
	  	</List> 
      </Grid.Column>
    </Grid>

  </div>
)

export default Dashboard;
