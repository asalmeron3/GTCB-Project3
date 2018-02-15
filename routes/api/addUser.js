// ------------Dependencies / Imports ------//
	const router = require("express").Router();
	const userController = require("../../controllers/userController");
	const passport = require('passport');
//-----------------------------------------//

// ---------------Routes ---------------//
	
	// Match the route with user/signup
	router.route("/signup")
		.post(userController.create);



module.exports = router;