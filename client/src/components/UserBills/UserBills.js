//-------------- Imports ----------------------//
	import React from "react"
	import "./UserBills.css"
	import { Image , Grid} from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userBills = props =>
		<Grid.Row width={8}>
		<div className = "UserBills">
			<h4>{props.billTitle}</h4>
			<p> {props.billDescription}</p>
		</div>
		</Grid.Row>
	export default userBills;