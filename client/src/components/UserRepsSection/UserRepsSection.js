//-------------- Imports ----------------------//
	import React from "react"
	import "./UserRepsSection.css"
	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userRepsSection = props =>
			// <Segment className="other">
			<Grid.Column >

				<h2> Your Senators and Representatives</h2>	

				<Grid>
					<Grid.Row columns = {3}>
					
						{props.children}
						
					
					</Grid.Row>
				</Grid>
			</Grid.Column>
			// </Segment>
	export default userRepsSection;