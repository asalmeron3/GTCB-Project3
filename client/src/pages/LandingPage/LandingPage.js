import React, { Component } from "react";
import Location from "../../components/Location";
import RecentInfo from "../../components/RecentInfo";
import Header from "../../components/Header";
import {Grid, List, Icon} from 'semantic-ui-react';
const MAPBOX_TOKEN = 'pk.eyJ1IjoibGluYWNsYXJrIiwiYSI6ImNqY28wb3M2MTB5aDkzNG54NmkzaHRkZ24ifQ.Q-2Qyz2AfFUHY4J_-a0shA';

class landingPage extends Component {

	render() {
		return(
			<div>
			<div className = "landingPageDiv">
				<Header/>
				<div>
					<Grid>
						<Grid.Row centered>
						<Location/>
						</Grid.Row>						
						<Grid.Row centered>
						<iframe width="900" height="460" scrolling="no" frameborder="no" src="https://fusiontables.google.com/embedviz?q=select+col5+from+1QlQxBF17RR-89NCYeBmw4kFzOT3mLENp60xXAJM&amp;viz=MAP&amp;h=false&amp;lat=40.21350372679789&amp;lng=-103.13297012499993&amp;t=1&amp;z=4&amp;l=col5"></iframe>	
						</Grid.Row>
					</Grid>
				</div>
<Grid stackable columns={2}>
<Grid.Row stretched>
 <RecentInfo labelColor="red" labeltext="Recent Bills">

    <List.Item>

      <List.Content text-align='left'>
        <List.Header><Icon name='arrow right' />Bill to designate the facility of the United States Postal Service</List.Header>
        <List.Description>
        <p> Sponsor Name: Elizabeth Warren</p>
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header><Icon name='arrow right' />A resolution urging the Government of the Democratic Republic of the Congo</List.Header>
        <List.Description>
        <p> Sponsor Name: Jeff Flake</p>
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header><Icon name='arrow right' />Accountability in Department of Veterans Affairs Scheduling and Consult Management Act</List.Header>
        <List.Description>
        <p> Sponsor Name: Jon Tester</p>
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header><Icon name='arrow right'/>ANTIQUITIES Act of 2018</List.Header>
        <List.Description>
        <p> Sponsor Name: Tom Udall</p>
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header> <Icon name='arrow right' />Iran Human Rights and Hostage-Taking Accountability Act </List.Header>
        <List.Description>
        <p> Sponsor Name: Marco Rubio</p>
        </List.Description>
      </List.Content>
    </List.Item>    
</RecentInfo>

<RecentInfo labelColor="blue" labeltext="Recent Votes">
    <List.Item>
      <List.Content>
        <List.Header><Icon name='arrow right' />On Motion to Suspend the Rules and Pass, as Amended</List.Header>
        <List.Description>
        <p> Result: Passed (Democratic: Yes & Republican: Yes) </p>       
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header><Icon name='arrow right' />On Motion to Concur in the Senate Amendments with an Amendment</List.Header>
        <List.Description>
        <p> Result: Passed (Democratic: No & Republican: Yes) </p> 
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item >
      <List.Content>
        <List.Header><Icon name='arrow right' />On the Nomination - David Ryan Stras, to be United States Circuit Judge for the Eighth Circuit</List.Header>
        <List.Description>
        <p> Result: Nomination Confirmed (Democratic: No & Republican: Yes) </p> 
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header><Icon name='arrow right' />Providing for consideration of the Senate amendments to H.R. 695, the Child Protection Improvements Act</List.Header>
        <List.Description>
      	<p> Result: Passed (Democratic: No & Republican: Yes) </p> 
        </List.Description>
      </List.Content>
    </List.Item>

    <List.Item>
      <List.Content>
        <List.Header><Icon name='arrow right' />A bill to amend title 18, United States Code, to protect pain-capable unborn children, and for other purposes</List.Header>
        <List.Description>
      	<p> Result: Cloture Motion Rejected (Democratic: No & Republican: Yes) </p> 
        </List.Description>
      </List.Content>
    </List.Item>   

				</RecentInfo>
				</Grid.Row>
				</Grid>
			</div>
			</div>


		)
	}
}

export default landingPage;