//-------------- Imports ----------------------//
	import React from "react"
	import "./UserRepsSection.css"
	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userRepsSection = props =>
			// <Segment className="other">
			
				
				<div>
				<h2> Your Representatives</h2>
				<Grid container horizontalAlign = "middle" doubling stackable columns = {3}>

						{props.children}

				</Grid>
				</div>
			
	export default userRepsSection;