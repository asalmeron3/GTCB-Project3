//-------------- Imports ----------------------//
	import React from "react"
	import "./UserBills.css"
	import { Image , Grid,Card,Popup} from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userBills = props =>
		<Grid.Row className="UserBills">
			<Popup 
				content = {props.popupMsg}
				trigger = {
					<Card>
				      <Card.Content>
				        <Card.Header>{props.billTitle}</Card.Header>
				        <Card.Description>{props.billDescription}</Card.Description>
				      </Card.Content>
				    </Card>
				}
			/>
		</Grid.Row>
	export default userBills;