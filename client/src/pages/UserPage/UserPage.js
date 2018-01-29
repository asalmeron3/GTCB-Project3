import React, { Component } from "react";
import UserRepCard from "../../components/Results";
import UserBills from "../../components/UserBills";
import NewsAndTweetCard from "../../components/NewsAndTweetCards";
import RepProfileSection from "../../components/RepProfileSection";
import UserRepsSection from "../../components/UserRepsSection";
import UserBillsSection from "../../components/UserBillsSection";
import UserCard from "../../components/UserCard";
import FeedColumn from "../../components/FeedColumn";
import API from "../../utils/API";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import {Grid,Modal,Button,Row} from 'semantic-ui-react';
import RepModal from "../RepModal";
const query = "540%20Old%20Highway%203%20Hampton%20GA";

class userPage extends Component {
	//Setting initial state

  state = { 
  	modalOpen: false,
  	modalName: "",
  	modalImage: "",
  	modalParty:"",
  	
  }

  handleOpen = (card,e) => {
  	this.setState({ modalOpen: true });
	this.setState({modalName:card.name});
	this.setState({modalImage:card.photoUrl});
	this.setState({modalParty:card.party});
	this.setState({ListOfBills: [{name:"Bill 1", desc:"This will come from api call",type:"fromList"},
		{name:"Bill 2", desc:"There will be an array of object (hopefully)",type:"fromList"},
		{name:"Bill 3", desc:"and we should use .map() to add them to the correct section",type:"fromList"}
	]});
  	this.setState({newsArticles: [{name:"Article 1", desc:"This will come from news api call"},
		{name:"Article 2", desc:"Look at UserPage.js at componentDidMount()"},
		{name:"Article 3", desc:"To See how to make the API call and get the data"}
	]});
	this.setState({tweets: [{name:"Tweet 1", desc:"This will come from twitter api call"},
		{name:"Tweet 2", desc:"make sure to setState: to something like res.data.theTweets"},
		{name:"Tweet 3", desc:"ask Arturo or Willina for help on this part. We are so close!"}
	]});

 

  }

  handleClose = () => this.setState({ modalOpen: false })

  checkForUserPage = (bill,e) =>{
  	if(bill.type=="userBill"){
  		//add the function or orperation for deleting this bill from the users saved bills
  		console.log("this is a userBills and we can get the name to delete from userDB");
  	}
  	else if(bill.type =="fromList"){
  		// add the function to save this bill to the user database
  		console.log("this is from a specific senator/api-call and we can use the name to save to the userDB")
  	}
  }

	constructor(props){
	    super(props);
	    this.state = {
	      govReps: [],
	      ListOfBills:[],
	      newsArticles: [],
	      tweets:[],
	      UserSavedBills:[]
	    }
	}

  componentDidMount() {
    API.search(query)
    .then((res) => {
      this.setState({govReps: res.data.officials});
      this.setState({UserSavedBills: [{name:"UserBill 1", desc:"This will come from DATABASE",type:"userBill"},
		{name:"UserBill 2", desc:"We need to make request to get all the bills the user has saved",type:"userBill"},
		{name:"UserBill 3", desc:"the checkForUserPage() will compare if we GET or POST",type:"userBill"}
	]});

    }).catch((error) => {
      console.log(error);
    })
  }

	render(){
		return (
		<div className = "userPageDiv">
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
	            <div>
					<RepProfileSection
						RepNameTopModal = {this.state.modalName}

					>
					<UserRepCard
						photoUrl = {this.state.modalImage}
						party = {this.state.modalParty}
						name = {this.state.modalName}
					/>
	            	<FeedColumn
						FeedName = "Recent Bills">
						
						{this.state.ListOfBills.map(oneBillAtATime =>{
			            	
			            	let bindFuncToBill = this.checkForUserPage.bind(this, oneBillAtATime);
			            	
			            	return (
				              <UserBills
				              	key = {oneBillAtATime.id}
								billTitle={oneBillAtATime.name}
					            billDescription={oneBillAtATime.desc}
					            addToUserPage = {bindFuncToBill}
					            popupMsg = "Click to Save"
				              /> )
			            })}
					</FeedColumn>
					<FeedColumn
						FeedName = "Recent News">
						
						{this.state.newsArticles.map(oneArticle =>{
			         
			            	return (
				              <NewsAndTweetCard
				              	key = {oneArticle.id}
								billTitle={oneArticle.name}
					            billDescription={oneArticle.desc}
				              /> )
			            })}
					</FeedColumn>
					<FeedColumn
						FeedName = "Recent Tweets">
						
						{this.state.tweets.map(oneTweet =>{
			            				            	
			            	return (
				              <NewsAndTweetCard
				              	key = {oneTweet.id}
								billTitle={oneTweet.name}
					            billDescription={oneTweet.desc}
				              /> )
			            })}
					</FeedColumn>
					
					</RepProfileSection>
				</div>
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
					{this.state.UserSavedBills.map(oneSavedBill =>{
			            	
			            	let bindFuncToBill = this.checkForUserPage.bind(this, oneSavedBill);
			            	
			            	return (
				              <UserBills
				              	key = {oneSavedBill.id}
								billTitle={oneSavedBill.name}
					            billDescription={oneSavedBill.desc}
					            addToUserPage = {bindFuncToBill}
					            popupMsg = "Click to Remove"
				              /> )
			            })}

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