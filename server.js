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

var client = new Twitter({
  consumer_key: 'Jt9yYf668aUb6RxopZGaIbcu6',
  consumer_secret: 'YhC4qwiPjMe9XPsNavevK2sLZExqwdjXZsfmXdErM0Uo8uMa7b',
  access_token_key: '918600732126990336-Bd3bPVEOFTogb7yq4mf6xaYg0hj6zxM',
  access_token_secret: 'Lf3n1k06KcH6K8rLzmXd40FZN0ZhjrJ2YGxr6L6JMQhpg'
});

var client2 = new Congress('HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88');
 

app.get('/twitterfeed/:userid', (req, res) => {
// 	// 
// 	const userid = req.params.userid

// 	axios({
//   method: 'Get',
//   url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${userid}&count=10`,
//   headers: {'consumerKey': ,
//            'consumerSecret': '',
//            'access_token_key': '',
//            'access_token_secret': ''}

// })
//   .then(function (response) {
//   	console.log(response);
//     res.send(response)

    
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


var params = {screen_name: req.params.userid,count:10};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    res.json({data:tweets});
  }
});
})

// app.get(`/members/house`, (req, res) => {

//   client2.memberLists({
//     congressNumber: '115',
//     chamber: 'house'
//     state: req.body.data
//   }).then(function(res) {
//     console.log(res);
//     res.json({data:results.members})
//   });

// })

app.get(`/members/senate/:state`, function(request, response){

  const senateState = request.params.state;

  client2.membersCurrentByStateOrDistrict({
    congressNumber: '115',
    chamber: 'senate',
    state: senateState
  }).then(function(res) {
    // console.log(res.results[0].id);
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
    // console.log(res.results[0].id);
    response.json(res.results)

  });
})

app.get(`/bills/:member_id`, function(request, response){

	const member_id = request.params.member_id;

  client2.billsByMember({
  	"member-id": member_id,
  	"bill-type": "introduced"
  }).then(function(res) {
    // console.log(res);
    response.json(res.results[0].bills)

  });
})

//--------------- Start the API server ---------------//
	app.listen(PORT, function() {
	  console.log(`🌎  ==> GoVoRep Server on PORT ${PORT}!`);
	});
// --------------------------------------------------//

