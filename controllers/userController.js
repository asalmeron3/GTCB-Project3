// -------------- Require Database -----------//

	const db = require("../models");

// ------------------------------------------//


// -------------- Export Methods ------------//

	module.exports = {

		create: function(req,res) {
			db.Users
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch (err => res.json(err))
		} // end of create method

	}; // end of module exports

// ------------------------------------------//
