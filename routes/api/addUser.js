// ------------Dependencies / Imports ------//
	const router = require("express").Router();
	const userController = require("../../controllers/userController");
	const passport = require('passport');
//-----------------------------------------//


// ---------------Routes ---------------//
	
	// Match the route with user/signup
	router.route("/signup")
		.post(userController.create);

	router.get('/callback',
		passport.authenticate('auth0', { failureRedirect: '/login' }),
		function(req, res) {
		  if (!req.user) {
			throw new Error('user null');
		  }
		  res.redirect("/");
		}
	  );

	router.get('/logout', (req, res) => {
		res.send('logging out');
	});
	  
	router.get('/login',
		passport.authenticate('auth0', {}), function (req, res) {
		res.redirect("/");
	  });

// -------------------------------------//


module.exports = router;