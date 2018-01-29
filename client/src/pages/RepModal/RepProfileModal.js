// import React, { Component } from "react";
// import UserRepCard from "../../components/Results";
// import UserBills from "../../components/UserBills";
// import NewsAndTweetCard from "../../components/NewsAndTweetCards";
// import RepProfileSection from "../../components/RepProfileSection";
// import FeedColumn from "../../components/FeedColumn";
// import {Grid,Popup,Row} from 'semantic-ui-react';
// import API from "../../utils/API";


// class RepProfileModal extends Component {
// 	state:{
// 		ListOfBills: [{name:"Bill 1", desc:"This will come from api call"},
// 			{name:"Bill 2", desc:"There will be an array of object (hopefully)"},
// 			{name:"Bill 3", desc:"and we should use .map() to add them to the correct section"}
// 		]
// 	}

// 	checkForUserPage = (theBill,e) => {
// 		console.log(theBill)	
// 	}

// 	render(){	
// 		return(
// 			<div>
// 				<RepProfileSection
// 					RepNameTopModal = {props.RepNameTopModal}
// 				>
// 					<UserRepCard
// 						photoUrl = {props.photoUrl}
// 						name = {props.name}
// 						party = {props.party}
// 					/>
									
// 					<FeedColumn
// 						FeedName = "Recent Bills">
						
// 						{this.state.ListOfBills.map(oneBillAtATime =>{
			            	
// 			            	let bindFuncToBill = this.checkForUserPage.bind(this, oneBillAtATime);
			            	
// 			            	return (
// 				              <UserBills
// 				              	key = {oneBillAtATime.id}
// 								billTitle={oneBillAtATime.name}
// 					            billDescription={oneBillAtATime.desc}
// 					            handleOpen = {bindFuncToBill}
// 				              /> )
// 			            })}
// 				</FeedColumn>

// 				<FeedColumn
// 					FeedName = "Latest News">
// 					<NewsAndTweetCard
// 						billTitle = "Recent Bill Status Section #001"
// 						billDescription = "This is a test for the NewsAndTweetCard Component"
// 					/><NewsAndTweetCard
// 						billTitle = "Recent Bill Status Section #001"
// 						billDescription = "This is a test for the NewsAndTweetCard Component"
// 					/><NewsAndTweetCard
// 						billTitle = "Recent Bill Status Section #001"
// 						billDescription = "This is a test for the NewsAndTweetCard Component"
// 					/>
// 				</FeedColumn>

// 				<FeedColumn
// 					FeedName = "Latest Tweets">
// 					<NewsAndTweetCard
// 						billTitle = "Recent Bill Status Section #001"
// 						billDescription = "This is a test for the NewsAndTweetCard Component"
// 					/><NewsAndTweetCard
// 						billTitle = "Recent Bill Status Section #001"
// 						billDescription = "This is a test for the NewsAndTweetCard Component"
// 					/><NewsAndTweetCard
// 						billTitle = "Recent Bill Status Section #001"
// 						billDescription = "This is a test for the NewsAndTweetCard Component"
// 					/>
// 				</FeedColumn>
// 				</RepProfileSection>
// 			</div>
// 		)
// 	}	
// }
// export default RepProfileModal;