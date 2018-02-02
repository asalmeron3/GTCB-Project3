//----------------Dependencies-----------------//
	var mongoose = require("mongoose");
//---------------------------------------------//

// ---- A reference to the Schema constructor ---//
	var Schema  = mongoose.Schema;
	var Bills = require("./bills");
//-----------------------------------------------//

// ---------------Adding bcrypt------------------//
	var bcrypt = require('bcrypt-nodejs');

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
		},
		picURL:{
			type:String,
		}
		saved: {
			type: Boolean,
			default: false
		},
		bills: [{
			type: Schema.Types.ObjectId,
			ref: "Bills"
		}]
		
	});
//-----------------------------------------------//

UserSchema.pre('save', function (next){
	var user = this;
	if (this.isModified('password') || this.isNew){
		bcrypt.genSalt(10, function (err, salt) {
			if(err){
				return next(err);
			}
			bcrypt.hash(user.password, salt, null, function(err, hash){
				if (err){
					return next(err);
				}
				user.password = hash;
				next();
			});
		});
	} else {
		return next();
	}
});

UserSchema.methods.comparePassword = function (passw, cb) {
	bcrypt.compare(passw, this.password, function(err, isMatch){
		if(err){
			return cd(err);
		}
		cb(null, isMatch);
	});
};

//-----------Create Model with Schema-------------//
	var Users = mongoose.model("Users",UserSchema);
//-----------------------------------------------//

module.exports = Users;