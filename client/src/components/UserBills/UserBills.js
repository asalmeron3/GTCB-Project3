//-------------- Imports ----------------------//
import React from "react"
import "./UserBills.css"
import { Image , Grid,Card,Popup,Icon} from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
var userBills = props =>
		<Grid.Row className="UserBills">
				<Card className="billCard">
				<Popup 
						content = {props.popupMsg}
						trigger = {
								<Icon name={props.iconType} size='big' float = "right" onClick = {props.iconFxn}/>    
						}
				/>
				
											
					<Card.Content onClick={props.addToUserPage}>
						<Card.Header>{props.billTitle}</Card.Header>
						<Card.Description>{props.billDescription}</Card.Description>
					</Card.Content>
				</Card>
		</Grid.Row>
export default userBills;