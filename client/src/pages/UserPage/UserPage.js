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
import {Grid,Modal,Button,Row,Form} from 'semantic-ui-react';
import RepModal from "../RepModal"; 

//import {getarticles, getbills, getsenate, gethouse, gettweets} from '../routes/api/dashboard.js';
let query = "540%20Old%20Highway%203%20Hampton%20GA";

class userPage extends Component {
	//Setting initial state

  state = { 
  	modalOpen: false,
  	modalName: "",
  	modalImage: "",
  	modalParty:"",
  	modalTwoOpen:"false",
  };


  handleOpen = (card,e) => {
  	console.log(card);
  	this.setState({ modalOpen: true });
	this.setState({modalName:card.name});
	this.setState({modalImage:card.photoUrl});
	this.setState({modalParty:card.party});
	API.getArticles(card.name)
	.then((response) => {
		console.log(response.data.articles)
    	this.setState({newsArticles:response.data.articles})
  	})
	.catch((error) => {
      console.log(error);
    })
  	API.getTweets(card.channels[1].id)
  	.then((response)=>{
  		console.log(response.data)
  		this.setState({tweets:response.data})
  	}).catch((error) => {
      console.log(error);
    })
    this.checkWhichCongressman(card.name);

  }


  checkWhichCongressman = (congressmanName) => {
  	console.log(congressmanName);
  	if (congressmanName == this.state.Senator1.name){
	  	API.getProbills(this.state.Senator1.id)
	  	.then((response)=>{
	  		console.log(response.data)
	  		this.setState({ListOfBills:response.data})
	  	}).catch((error) => {
	      console.log(error);
	    })
  	}
  	else if (congressmanName == this.state.Senator2.name){
	  	API.getProbills(this.state.Senator2.id)
	  	.then((response)=>{
	  		console.log(response.data)
	  		this.setState({ListOfBills:response.data})
	  	}).catch((error) => {
	      console.log(error);
	    })
  	}
  	else if (congressmanName == this.state.House1.name){
	  	API.getProbills(this.state.House1.id)
	  	.then((response)=>{
	  		console.log(response.data)
	  		this.setState({ListOfBills:response.data})
	  	}).catch((error) => {
	      console.log(error);
	    })
  	}
  }

  handleClose = () => this.setState({ modalOpen: false })

	//--------Handles the Modal for the UserCard --------//
	  handleOpenTwo = ()=> {
	  	this.setState({modalTwoOpen:true})
	  }
	  handleCloseTwo =() => this.setState({modalTwoOpen:false});
	  handleImageLink = (e) =>{
	    this.setState({UserPicFromModal: e.target.value});
	  };
	  handleLocationChange= (e) =>{
	    this.setState({UserModalLocation: e.target.value});
	  };
	  saveInfoToDB =()  =>{
		  if(this.state.UserPicFromModal!=""){
		  	API.addPic(this.state.UserPicFromModal)
		  	.then((res) => {
		      console.log(res);
		  	}).catch((error) => {
		      console.log(error);
		    });
		    this.setState({UserPicFromModal:""})
		   console.log(this.state.UserPicFromModal);
		   }

		   if(this.state.UserModalLocation!=""){
		   	console.log(this.state.UserModalLocation)
		  	API.updateAddress(this.state.UserModalLocation)
		  	.then((res) => {
		      console.log(res);
		  	}).catch((error) => {
		      console.log(error);
		    });
		   }
		   this.setState({UserModalLocation:""})
		   console.log(this.state.UserModalLocation);
	  }
  	//------------------------------------------------//

  
// -----------------------Check which Bill we clicked and what to do --------------------//

	// This section is checking if the user clicked on the bill
	// from the modal (needs to save to DB) or if user clicked
	// it from the user page (needs to delete from DB)

  checkForUserPage = (bill,e) =>{
  	if(bill.type=="userBill"){
  		
  		//add the function or orperation for deleting this bill from the users saved bills
  		
  		console.log("this is a userBills and we can get the name to delete from userDB");
  		
  		// -----------This is where we DELETE the bill FROM the DB ----------//
  			API.deleteBillFromDB(bill.billTitle)
  			.then((res) => {
		       console.log(res);
		  	}).catch((error) => {
		       console.log(error);
		     });
		//------------------------------------------------------------------//
  	}
  	else if(bill.type =="fromList"){
  		// add the function to save this bill to the user database
  		console.log("this is from a specific senator/api-call and we can use the name to save to the userDB")

  		// -----------This is where we SAVE the bill TO the DB ----------//
  			API.saveBillToDB({billTitle: bill.billTitle, billDescription: bill.billDescription})
  			.then((res) => {
		       console.log(res);
		  	}).catch((error) => {
		       console.log(error);
		     });
		//------------------------------------------------------------------//

  	}
  }
// --------------------------------------------------------------- --------------------//


	constructor(props){
	    super(props);
	    this.state = {
	      govReps: [],
	      ListOfBills:[],
	      newsArticles: [],
	      tweets:[],
		  UserSavedBills:[],
		  reps:[],
	      UserPicDB:"",
	      UserLocation:"",
	      Name: "",
	      DistrictState:"",
	      DistrictNumber:"",
	      UserPicFromModal:"",
	      UserModalLocation:"",
	      Senator1:{},
	      Senator2:{},
	      House1:{}
	    }
	}


  componentDidMount() {
	// --------------This is the call to DB for the user information ------//
  
	  // For this call, the response needs to be an array with two responses
	  // the first response should be the USER info from the User Collection
	  // the second response should be the user's saved BILLs from the 2nd 
	  // DB collection ... I hope this makes sense 

	    API.UserInfoFromDB()
	    .then((res)=>{
	    this.setState({UserPicDB:res.data[0].picURL});
	    //this.setState({UserLocation:res.data[0].location});
	  	//query= location.add.split(" ").join("%20");
	  	this.setState({Name:res.data[0].name});
	  	this.setState({UserSavedBills:res.data[1]})
	    	}).catch((error) => {
	  	console.log(error)})
	//---------------------------------------------------------------------//
    
	// ----------------- This is the query for the officials ---------------//
	    API.search(query)
	    .then((res) => {
	      this.setState({govReps: res.data.officials});
	      this.setState({DistrictNumber:res.data.offices[1].name.split("-")[1]});
	      this.setState({DistrictState:res.data.offices[1].name.split("-")[0].split(" ").slice(-1)[0]});

	    }).catch((error) => {
	      console.log(error);
	    })
	//---------------------------------------------------------------------//


	//-----These are the THREE (3) Calls to get the Reps' ID for Propubulica---------//

	    API.getSenate(this.state.DistrictState)
	    .then((res)=>{
	    	console.log(res)
	    	this.setState({Senator1:{Name:res.results[0].name, id:res.results.id}})
	    	this.setState({Senator2:{Name:res.results[1].name, id:res.results.id}})
	    })
	    .catch((error)=>{
	    	console.log(error)
	    })

	    API.getHouse(this.state.DistrictState,this.state.DistrictNumber)
	    .then((res)=>{
	    	console.log(res)
	    	this.setState({House1:{Name:res.results[0].name, id:res.results.id}})
	    })
	    .catch((error)=>{
	    	console.log(error)
	    })
	//---------------------------------------------------------------------//
    
  }

	render(){
		return (
		
		<div className = "userPageDiv">
		<Header />
			
			<Grid.Column style ={{height:"100%"}}>
			<Grid centered padded>
				
				<UserCard
					imageSource = {this.state.UserPicDB}
					Name = {this.state.Name}
					DistrictState = {this.state.DistrictState}
					DistrictNumber={this.state.DistrictNumber}
					Meta = "User"
					addPhoto= {this.handleOpenTwo}
					
				/>
				
			</Grid>

				
			<Grid verticalAlign="middle" container>
				<Grid.Column mobile={8} tablet={12} computer={12} largeScreen={12} wideScreen={12}>
					<UserRepsSection>
	            
	            
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
			              <Modal 
							open={this.state.modalTwoOpen}
							onClose={this.handleCloseTwo}
							size = "small"
						   >
							<Modal.Content> 
							<Grid verticalAlign="middle" container stackable columns={2}>
							
							<Grid.Column>
						  <Form.Field>
								<label> Image URL: </label>
						        <Form.Input
						          className = "form-control"
						          placeholder = "Insert Image Link Here"
						          id = "imageURL"
						          type = "text"
						          value = {this.state.UserPicFromModal}
						          onChange = {this.handleImageLink}
						        />
						    </Form.Field>
						    <Button type = "submit"
								onClick = {this.saveInfoToDB}
								className = "btn btn-success"> 

								Update Your Photo 

							</Button>
							</Grid.Column>

						<Grid.Column>
						  <Form.Field required>
								<label> New Location: </label>
						        <Form.Input
						          className = "form-control"
						          placeholder = "Updated Location Here"
						          id = "newLocation"
						          type = "text"
						          value = {this.state.UserModalLocation}
						          onChange = {this.handleLocationChange}
						        />
						    </Form.Field>
						    <Button type = "submit"
								onClick = {this.saveInfoToDB}
								className = "btn btn-success"> 

								Update Your Address 

							</Button>
							</Grid.Column>
							</Grid>
						    </Modal.Content>
						    </Modal>
						
					</UserRepsSection>
				</Grid.Column >
				<Grid.Column mobile={8} tablet={4} computer={4} largeScreen={4} wideScreen={4}>
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
					
				
			</Grid>
			
			<Modal 
				open={this.state.modalOpen}
   				onClose={this.handleClose}
   				size = "fullscreen"
   			>
			<Modal.Content> 
			<Modal.Description>
					<RepProfileSection
						RepNameTopModal = {this.state.modalName}

					>
					<Grid.Column>
					<UserRepCard
						photoUrl = {this.state.modalImage}
						party = {this.state.modalParty}
						name = {this.state.modalName}
						theColor = {this.state.modalParty==="Republican"? "#cc3b49" : "#006286"}
					/>
					</Grid.Column>
					<Grid.Column>
	            	<FeedColumn
						FeedName = "Recent Bills">
						
						{this.state.ListOfBills.map(oneBillAtATime =>{
			            	
			            	let bindFuncToBill = this.checkForUserPage.bind(this, oneBillAtATime);
			            	
			            	return (
				              <UserBills
				              	key = {oneBillAtATime.id}
								billTitle={oneBillAtATime.short_title}
					            billDescription={oneBillAtATime.summary}
					            addToUserPage = {bindFuncToBill}
					            popupMsg = "Click to Save"
				              /> )
			            })}
					</FeedColumn>
					</Grid.Column>
					<Grid.Column>
					<FeedColumn
						FeedName = "Recent News">
						
						{this.state.newsArticles.map(oneArticle =>{
			         
			            	return (
				              <NewsAndTweetCard
				              	key = {oneArticle.id}
								billTitle={oneArticle.title}
					            billDescription={oneArticle.description}
					            url={oneArticle.url}
				              /> )
			            })}
					</FeedColumn>
					</Grid.Column>
					<Grid.Column>
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
					</Grid.Column>
					
					</RepProfileSection>
				</Modal.Description>
            </Modal.Content>
            </Modal>
        </Grid.Column>
    
		</div>
		)
	}

}

export default userPage;