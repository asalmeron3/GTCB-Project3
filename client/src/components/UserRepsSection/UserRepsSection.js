//-------------- Imports ----------------------//
	import React from "react"
	import "./UserRepsSection.css"
	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userRepsSection = props =>
			<Segment style={{background:"lightcoral"}}>

				<h2> Your Senators and Representative</h2>	

				<Grid>
					<Grid.Row width = {12}>
					
						{props.children}
						<Grid.Column width={4}>
							
						</Grid.Column>
					
					</Grid.Row>
				</Grid>
			</Segment>
	export default userRepsSection;