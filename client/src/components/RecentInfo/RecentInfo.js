//-------------- Imports ----------------------//
	import React from "react"
	// import "../UserBills/UserBills.css"
	import { List, Grid, Image, Label, Segment } from 'semantic-ui-react'

//--------------------------------------------//

//-------------- RecentInfo Div -----------------//

var RecentInfo = props => 

  <Grid.Column>
      <Segment raised>
        <Label as='a' color={'props.labelColor'}>{props.labeltext}</Label>
        	{props.children}
      </Segment>
    </Grid.Column>


export default RecentInfo;
