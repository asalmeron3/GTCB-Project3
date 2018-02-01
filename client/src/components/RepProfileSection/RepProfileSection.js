//-------------- Imports ----------------------//
	import React from "react"
	import "./RepProfileSection.css"
	import "../Results";

	import { Grid,Segment,Container } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var RepProfileSection = props =>
		<Container>
				<div><h1 className="headerUserRepSec"> {props.RepNameTopModal}</h1></div>
				<Grid stackable>
				<Grid.Row verticalAlign="middle" container stretched columns ={4}>
				
						{props.children}

				</Grid.Row>
				</Grid>
		</Container>
	export default RepProfileSection;