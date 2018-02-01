//-------------- Imports ----------------------//
	import React from "react"
	import "./UserBillsSection.css"
	import { Grid,Segment } from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userBillsSection = props =>
	<Grid.Column>
	<div className="billCol">				

		<Segment  style={{background:"#006286"}}>
			<h2 className="headerBillsSec"> Bills of Interest </h2>
				<div className = "scrollingDiv">
					
					{props.children}
				</div>

		</Segment>
	</div>
	</Grid.Column>
			
	export default userBillsSection;