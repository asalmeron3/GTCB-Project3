import React, { Component } from "react";
// import Map from "../../components/Map";
import Location from "../../components/Location";
import MapGL from 'react-map-gl';
import {Grid} from 'semantic-ui-react';
import Header from "../../components/Header";


class landingPage extends Component {
	state: {
		testLanding: ""
	};

	render() {
		return(
			<div>
				<Header/>
				<div style={{background: "lavender"}}>
					<Grid>
						<Grid.Row width={16}>
							<Location/>
						</Grid.Row>

						<Grid.Row width= {16}>
							<MapGL
						        width={700}
						        height={450}
						        latitude={37.768}
						        longitude={-122.331}
						        zoom={9.017}
						        // mapStyle="mapbox://styles/mapbox/dark-v9" 
						        // mapboxApiAccessToken={Your_Mapbox_Token}
						    />
						</Grid.Row>
					</Grid>
				</div>
			</div>


		)
	}
}

export default landingPage;