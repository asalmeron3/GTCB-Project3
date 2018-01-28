import React, { Component } from "react";
import UserRepCard from "../../components/Results";
import UserBills from "../../components/UserBills";
import NewsAndTweetCard from "../../components/NewsAndTweetCards";
import RepProfileSection from "../../components/RepProfileSection";
import FeedColumn from "../../components/FeedColumn";
import {Grid,Popup,Row} from 'semantic-ui-react';
import API from "../../utils/API";


var RepProfileModal = props =>
			<div>
				<RepProfileSection
					RepNameTopModal = {props.RepNameTopModal}
				>
					<UserRepCard
						photoUrl = {props.photoUrl}
						name = {props.name}
						party = {props.party}
					/>
									
					<FeedColumn
						FeedName = "Recent Bills">
						
							<UserBills
								billTitle = "Recent Bill Status Section #001"
								billDescription = "This is a test for the UserBills Component"
								popupMsg = "Click to Save"
							/>

						
							<UserBills
								billTitle = "Recent Bill Status Section #001"
								billDescription = "This is a test for the UserBills Component"
								popupMsg = "Click to Save"
							/>
						
							<UserBills
								billTitle = "Recent Bill Status Section #001"
								billDescription = "This is a test for the UserBills Component"
								popupMsg = "Click to Save"
							/>
				</FeedColumn>

				<FeedColumn
					FeedName = "Latest News">
					<NewsAndTweetCard
						billTitle = "Recent Bill Status Section #001"
						billDescription = "This is a test for the NewsAndTweetCard Component"
					/><NewsAndTweetCard
						billTitle = "Recent Bill Status Section #001"
						billDescription = "This is a test for the NewsAndTweetCard Component"
					/><NewsAndTweetCard
						billTitle = "Recent Bill Status Section #001"
						billDescription = "This is a test for the NewsAndTweetCard Component"
					/>
				</FeedColumn>

				<FeedColumn
					FeedName = "Latest Tweets">
					<NewsAndTweetCard
						billTitle = "Recent Bill Status Section #001"
						billDescription = "This is a test for the NewsAndTweetCard Component"
					/><NewsAndTweetCard
						billTitle = "Recent Bill Status Section #001"
						billDescription = "This is a test for the NewsAndTweetCard Component"
					/><NewsAndTweetCard
						billTitle = "Recent Bill Status Section #001"
						billDescription = "This is a test for the NewsAndTweetCard Component"
					/>
				</FeedColumn>
				</RepProfileSection>
			</div>


export default RepProfileModal;