//-------------- Imports ----------------------//
	import React from "react"
	import "./RepProfileSection.css"
	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var RepProfileSection = props =>
			<Segment style={{background:"lightcoral"}}>

				<h2> Arturo Salmeron</h2>	

				<Grid>
					<Grid.Row columns = {4}>
					
						{props.children}
						
					
					</Grid.Row>
				</Grid>
			</Segment>
	export default RepProfileSection;