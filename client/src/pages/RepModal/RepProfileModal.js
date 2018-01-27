import React, { Component } from "react";
import UserRepCard from "../../components/Results";
import UserBills from "../../components/UserBills";
import RepProfileSection from "../../components/RepProfileSection";
import FeedColumn from "../../components/FeedColumn";
import {Grid} from 'semantic-ui-react';
import API from "../../utils/API";


class RepProfileModal extends Component{
	render(){
		return(
			<div>
				<RepProfileSection>
					<UserRepCard/>
									
					<FeedColumn
						FeedName = "Recent Bills">
					<UserBills
						billTitle = "Recent Bill Status Section #001"
						billDescription = "This is a test for the UserBills Component"
					/>
					<UserBills
						billTitle = "Recent Bill Status Section #002"
						billDescription = "This test #2 for the UserBills Component"
					/>
					<UserBills
						billTitle = "Recent Bill Status Section #003"
						billDescription = "This is the third test for the UserBills Component"
					/>
				</FeedColumn>

				<FeedColumn
					FeedName = "Latest News">
					<UserBills
						billTitle = "News #001"
						billDescription = "This is a test for the UserBills Component"
					/>
					<UserBills
						billTitle = "News #002"
						billDescription = "This test #2 for the UserBills Component"
					/>
					<UserBills
						billTitle = "News #003"
						billDescription = "This is the third test for the UserBills Component"
					/>
				</FeedColumn>

				<FeedColumn
					FeedName = "Latest Tweets">
					<UserBills
						billTitle = "Twitter #001"
						billDescription = "This is a test for the UserBills Component"
					/>
					<UserBills
						billTitle = "Twitter #002"
						billDescription = "This test #2 for the UserBills Component"
					/>
					<UserBills
						billTitle = "Twitter #003"
						billDescription = "This is the third test for the UserBills Component"
					/>
				</FeedColumn>
				</RepProfileSection>
			</div>
			)
	}
}

export default RepProfileModal;