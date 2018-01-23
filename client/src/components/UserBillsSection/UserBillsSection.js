//-------------- Imports ----------------------//
	import React from "react"
	import "./UserBillsSection.css"
	import { Grid } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userBillsSection = props =>
		<Grid>
			<Grid.Column width={15}>
				<div className = "UserBillsSection">
				<h2> Bills of Interest </h2>
					{props.children}
				</div>
			</Grid.Column>
		</Grid>
			
	export default userBillsSection;