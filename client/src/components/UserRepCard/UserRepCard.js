//-------------- Imports ----------------------//
	import React from "react"
	import "./UserRepCard.css"
	import { Image, Grid , Card} from 'semantic-ui-react'
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var userRep = props =>
	<Grid.Column width={4}>
		<div className = "UserRepCard">
			<Card>
				<div className = "RepCardDiv">
					<Image src={props.imageSource} size='small' circular />			
				</div>

				<Card.Content>
					<Card.Header> {props.repName}</Card.Header>
					<Card.Meta> {props.Meta} </Card.Meta>
				 	<Card.Description> {props.repInfo}</Card.Description>
			 	</Card.Content>
			 </Card>
		</div>
	</Grid.Column>

	export default userRep;