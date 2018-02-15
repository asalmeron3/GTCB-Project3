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
			<br/>
			</div>

			</div>


		)
	}
}

export default landingPage;