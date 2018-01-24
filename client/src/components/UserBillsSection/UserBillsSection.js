//-------------- Imports ----------------------//
	import React from "react"
	import "./UserBillsSection.css"
	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userBillsSection = props =>
		<Grid>
			<Grid.Column width={15}>
				<Segment style={{background:"lightblue"}}>
				<h2> Bills of Interest </h2>
					{props.children}
				</Segment>
			</Grid.Column>
		</Grid>
			
	export default userBillsSection;