//-------------- Imports ----------------------//
	import React from "react"
	import "./UserRepCard.css"
	import { Image, Grid } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userRep = props =>
	<Grid.Column width={4}>
		<div className = "UserRepCard">
			<Image src={props.imageSource} size='small' circular />			
			<h4> {props.repName}</h4>
			<p> {props.repInfo}</p>
		</div>
	</Grid.Column>

	export default userRep;