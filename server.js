//--------------Dependencies -----------------//
	const express = require("express");
	const path = require('path');
	const bodyParser = require("body-parser");
	const mongoose = require("mongoose");
	const routes = require("./routes");
	const passport = require('passport');
	// const authRoutes = require('./routes/api/auth-routes');
	// const proxy = require('http-proxy-middleware');
	const morgan = require('morgan');
	const config = require('./config/database');
	var Twitter = require('twitter');
	var Congress = require( 'propublica-congress-node' );

//-------------------------------------------//	

	const app = express();
	const PORT = process.env.PORT || 3002;

// ------ Configure body parser for AJAX requests--------//
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	// Serve up static assets
	app.use(express.static(path.join(__dirname, '/build')));
	// Add routes, both API and view
	app.use('/',routes);
	// app.use('/auth', routes);
	// app.use('/', proxy({target: 'localhost:3002', changeOrigin: true}));
	app.use(passport.initialize());
//-------------------------------------------------------//

//------------ Set up promises with mongoose -----------//
	mongoose.Promise = global.Promise;
	// Connect to the Mongo DB
	mongoose.connect(
	  process.env.MONGODB_URI || "mongodb://localhost/GoVoRep",
	  {
	    useMongoClient: true
	  }
	);
//----------------------------------------------------//

//-------------------- Set API Keys -------------------//
var client = new Twitter({
  consumer_key: 'Jt9yYf668aUb6RxopZGaIbcu6',
  consumer_secret: 'YhC4qwiPjMe9XPsNavevK2sLZExqwdjXZsfmXdErM0Uo8uMa7b',
  access_token_key: '918600732126990336-Bd3bPVEOFTogb7yq4mf6xaYg0hj6zxM',
  access_token_secret: 'Lf3n1k06KcH6K8rLzmXd40FZN0ZhjrJ2YGxr6L6JMQhpg'
});

var client2 = new Congress('HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'); 
//----------------------------------------------------//

//-------------------- Get Twitter -------------------//
app.get('/twitterfeed/:userid', (req, res) => {

var params = {screen_name: req.params.userid,count:10};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    res.json({data:tweets});
  }
});
})
//----------------------------------------------------//

//-------------------- Get Bills -------------------//
app.get(`/members/senate/:state`, function(request, response){

  const senateState = request.params.state;

  client2.membersCurrentByStateOrDistrict({
    congressNumber: '115',
    chamber: 'senate',
    state: senateState
  }).then(function(res) {

    response.json(res.results)

  })

})

app.get(`/members/house/:state/:district`, function(request, response){

	const houseState = request.params.state;
	const houseDistrict = request.params.district;

  client2.membersCurrentByStateOrDistrict({
    congressNumber: '115',
    chamber: 'house',
    state: houseState,
    district: houseDistrict
  }).then(function(res) {

    response.json(res.results)

  });
})

app.get(`/bills/:member_id`, function(request, response){

	const member_id = request.params.member_id;

  client2.billsByMember({
  	"member-id": member_id,
  	"bill-type": "introduced"
  }).then(function(res) {

    response.json(res.results[0].bills)

  });
})
//----------------------------------------------------//

//--------------- Get Member's Information -----------//
app.get(`/members/:member_id`, function(request, response){

	const member_id = request.params.member_id;

	client2.memberBioAndRoles({
	"member-id": member_id
	}).then(function(res) {

		response.json(res.results[0].roles[0])
	})
})

//----------------------------------------------------//


//--------------- Start the API server ---------------//
	app.listen(PORT, function() {
	  console.log(`🌎  ==> GoVoRep Server on PORT ${PORT}!`);
	});
// --------------------------------------------------//

