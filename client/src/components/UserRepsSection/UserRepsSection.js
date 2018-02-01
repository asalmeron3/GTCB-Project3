//-------------- Imports ----------------------//
	import React from "react"
	import "./UserRepsSection.css"
	import { Grid,Segment,Container } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userRepsSection = props =>
			// <Segment className="other">
			
				<Container>
				<div><h1 className="headerUserRepSec"> Your Representatives</h1></div>
				<Grid stackable>
				<Grid.Row verticalAlign="middle" container stretched>
				
						{props.children}

				</Grid.Row>
				</Grid>
				</Container>
			
	export default userRepsSection;