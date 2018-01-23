//-------------- Imports ----------------------//
	import React from "react"
	import "./UserCard.css"
	import { Image } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userCard = props =>
		<div className = "UserCard">
			<Image src={props.imageSource} size='small' circular />			
			<h4> {props.Name}</h4>
			<p> {props.District}</p>
		</div>
	export default userCard;