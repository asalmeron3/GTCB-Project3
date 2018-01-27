import React, { Component } from "react";
import UserRepCard from "../../components/Results";
import UserBills from "../../components/UserBills";
import UserRepsSection from "../../components/UserRepsSection";
import UserBillsSection from "../../components/UserBillsSection";
import UserCard from "../../components/UserCard";
import {Grid} from 'semantic-ui-react';
import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
const query = "540%20Old%20Highway%203%20Hampton%20GA";

class userPage extends Component {
	//Setting initial state

	constructor(props){
	    super(props);
	    this.state = {
	      govReps: []
	  }
  }

  componentDidMount() {
    API.search(query)
    .then((res) => {
      this.setState({govReps: res.data.officials});
    }).catch((error) => {
      console.log(error);
    })
  }

	render(){
		return (
		<div>
		<Header />
			<Grid>
			<Grid.Row width={16}>
				<UserCard
						imageSource = "https://avatars0.githubusercontent.com/u/27255697?s=400&u=ed3a2731302e7cc0a83956c2248e17be0ff9b7d1&v=4"
						Name = "Arturo Salmeron"
						District = "Atlanta - District ???"
						Meta = "User"
					
				/>
			</Grid.Row>

			<Grid.Row width={16}>
			<Grid.Column width={12}>
				<UserRepsSection>
					{this.state.govReps.map(govRep =>(
						<UserRepCard
						  name={govRep.name}
		                  party={govRep.party}
		                  urls={govRep.urls}
		                  photoUrl = {govRep.photoUrl}
		                  facebook = {govRep.channels[0].id}
		                  twitter = {govRep.channels[1].id}
	                    />
                    ))}
						
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
		<Footer />
		</div>
		)
	}

}

export default userPage;