//-------------- Imports ----------------------//
	import React from "react"
	import "./UserBillsSection.css"
	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userBillsSection = props =>
		// <Grid>
			<Grid.Column className= "colUBS">
				<Segment style={{background:"#006286"}}>
				<h2> Bills of Interest </h2>
					{props.children}
				</Segment>
			</Grid.Column>
		// </Grid>
			
	export default userBillsSection;