//-------------- Imports ----------------------//
	import React from "react"
	import "../UserBills/UserBills.css"
	import { Image , Grid,Card} from 'semantic-ui-react'

//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var NewsAndTweetCard = props =>
		<Grid.Row className="UserBills">
			<a href={props.url} target="_blank">
			<Card className="billCard">
		      <Card.Content>
		        <Card.Header>{props.billTitle}</Card.Header>
		        <Card.Description>{props.billDescription}</Card.Description>
		      </Card.Content>
		    </Card>
		    </a>
		</Grid.Row>
	export default NewsAndTweetCard;