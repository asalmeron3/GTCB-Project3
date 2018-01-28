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
import {Modal,Button} from 'semantic-ui-react';
import RepModal from "../RepModal";
const query = "540%20Old%20Highway%203%20Hampton%20GA";

class userPage extends Component {
	//Setting initial state

  state = { 
  	modalOpen: false,
  	modalName: "",
  	modalImage: "",
  	modalParty:"" }

  handleOpen = (card,e) => {
  	this.setState({ modalOpen: true });
		console.log(card);
		this.setState({modalName:card.name});
		this.setState({modalImage:card.photoUrl});
		this.setState({modalParty:card.party});

 

  }

  handleClose = () => this.setState({ modalOpen: false })


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
			<Grid >
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
					
						<Modal 
							open={this.state.modalOpen}
       				onClose={this.handleClose}
       				size = "large"
       			>
            <Modal.Content> 
            	<RepModal
								photoUrl = {this.state.modalImage}
								RepNameTopModal = {this.state.modalName}
								party = {this.state.modalParty}
								name = {this.state.modalName}
            	/>
            </Modal.Content>
            </Modal>
            
            {this.state.govReps.map(govRep =>{
            	let boundItemClick = this.handleOpen.bind(this, govRep);
            	return (
              <UserRepCard
              	key = {govRep.id}
							  name={govRep.name}
	              party={govRep.party}
	              theColor = {govRep.party==="Republican"? "#cc3b49" : "#006286"}
	              urls={govRep.urls}
	              photoUrl = {govRep.photoUrl}
	              facebook = {govRep.channels[0].id}
	              twitter = {govRep.channels[1].id}
	              handleOpen = {boundItemClick}
              /> )
            })}

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