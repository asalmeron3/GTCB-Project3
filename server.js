//--------------Dependencies -----------------//
	const express = require("express");
	const path = require('path');
	const bodyParser = require("body-parser");
	const mongoose = require("mongoose");
	const routes = require("./routes");
	const passport = require('passport');
	const authRoutes = require('./routes/api/auth-routes');
	// const proxy = require('http-proxy-middleware');
	const morgan = require('morgan');
	const config = require('./config/database');

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
	app.use('/auth', authRoutes);
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


//--------------- Start the API server ---------------//
	app.listen(PORT, function() {
	  console.log(`🌎  ==> GoVoRep Server on PORT ${PORT}!`);
	});
// --------------------------------------------------//
