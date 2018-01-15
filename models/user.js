//----------------Dependencies-----------------//
	var mongoose = require("mongoose");
//---------------------------------------------//

// ---- A reference to the Schema constructor ---//
	var Schema  = mongoose.Schema;
//-----------------------------------------------//

//-------------Create the User Schema---------------//

	//The User will need to sign up with their name,
	// username, password, & email. They will have the 
	// option to save their address/location, save their
	var UserSchema = new Schema ({
		name: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		location: {
			type: String,
		},
		email: {
			type: String,
			required: true,
		}
		
	});
//-----------------------------------------------//


//-----------Create Model with Schema-------------//
	var Users = mongoose.model("Users",UserSchema);
//-----------------------------------------------//

module.exports = Users;