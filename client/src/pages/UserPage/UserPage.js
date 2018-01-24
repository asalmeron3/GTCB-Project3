import React, { Component } from "react";
import UserRepCard from "../../components/UserRepCard";
import UserBills from "../../components/UserBills";
import UserRepsSection from "../../components/UserRepsSection";
import UserBillsSection from "../../components/UserBillsSection";
import UserCard from "../../components/UserCard";
import {Grid} from 'semantic-ui-react';
import API from "../../utils/API";

class userPage extends Component {
	//Setting initial state
	state: {
		testing:""
	};
	render(){
		return (
		<div style={{background:"lavender"}}>
			<Grid>
			<Grid.Row width={12}>
				<UserCard
						imageSource = "https://avatars0.githubusercontent.com/u/27255697?s=400&u=ed3a2731302e7cc0a83956c2248e17be0ff9b7d1&v=4"
						Name = "User Arturo Salmeron"
						District = "Atlanta - District ???"
						Meta = "Senator"
					
				/>
			</Grid.Row>

			<Grid.Row width={14}>
			<Grid.Column width={12}>
				<UserRepsSection>

					<UserRepCard
						imageSource = "https://avatars0.githubusercontent.com/u/27255697?s=400&u=ed3a2731302e7cc0a83956c2248e17be0ff9b7d1&v=4"
						repName = "Senator Testing"
						repInfo = " A brief bio should go here. But this is just going to be a bunch of typing that I use for testing out how the card looks"
					/>
					<UserRepCard
						imageSource = "https://avatars0.githubusercontent.com/u/27255697?s=400&u=ed3a2731302e7cc0a83956c2248e17be0ff9b7d1&v=4"
						repName = "Senator Testing"
						repInfo = " A brief bio should go here. But this is just going to be a bunch of typing that I use for testing out how the card looks"
					/>
					<UserRepCard
						imageSource = "https://avatars0.githubusercontent.com/u/27255697?s=400&u=ed3a2731302e7cc0a83956c2248e17be0ff9b7d1&v=4"
						repName = "Senator Testing"
						repInfo = " A brief bio should go here. But this is just going to be a bunch of typing that I use for testing out how the card looks"
					/>
					<UserRepCard
						imageSource = "https://avatars0.githubusercontent.com/u/27255697?s=400&u=ed3a2731302e7cc0a83956c2248e17be0ff9b7d1&v=4"
						repName = "Senator Testing"
						repInfo = " A brief bio should go here. But this is just going to be a bunch of typing that I use for testing out how the card looks"
					/>
					<UserRepCard
						imageSource = "https://avatars0.githubusercontent.com/u/27255697?s=400&u=ed3a2731302e7cc0a83956c2248e17be0ff9b7d1&v=4"
						repName = "Senator Testing"
						repInfo = " A brief bio should go here. But this is just going to be a bunch of typing that I use for testing out how the card looks"
					/>
				</UserRepsSection>
			</Grid.Column>
			
			<Grid.Column width = {4}>
				<UserBillsSection>
					<UserBills
						billTitle = "BillTest #001"
						billDescription = "This is a test for the UserBills Component"
					/>
					<UserBills
						billTitle = "BillTest #002"
						billDescription = "This test #2 for the UserBills Component"
					/>
					<UserBills
						billTitle = "BillTest #003"
						billDescription = "This is the third test for the UserBills Component"
					/>
				</UserBillsSection>
			</Grid.Column>
			</Grid.Row>
			</Grid>
			
		</div>
		)
	}

}

export default userPage;