//--------------Dependencies -----------------//
	const express = require("express");
	const twitterAPI = require('node-twitter-api');
	const axios = require('axios')

	//-------------------------------------------//	

	const app = express();
	const PORT = process.env.PORT || 3002;

	route