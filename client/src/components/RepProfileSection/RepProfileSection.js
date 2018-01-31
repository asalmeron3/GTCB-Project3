//-------------- Imports ----------------------//
	import React from "react"
	import "./RepProfileSection.css"
	import "../Results";

	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var RepProfileSection = props =>
			<Segment style={{background:"#cc3b49"}}>

				<h2> {props.RepNameTopModal}</h2>	

				<Grid container horizontalAlign = "middle" doubling stackable columns = {4}>
					
					
						{props.children}
						
					
				</Grid>
			</Segment>
	export default RepProfileSection;