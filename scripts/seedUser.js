// ------------Dependencie/Imports --------------//
   var mongoose = require("mongoose");
   var db = require("../models");
// ---------------------------------------------//
  mongoose.Promise = global.Promise;

// --------------Connect to DB------------------//
  mongoose.connect(
  	process.env.MONGODB_URI || "mongodb://localhost/GoVoRep",
  	{
  	  useMongoClient: true
  	}
  );
// ---------------------------------------------//



// ---------------Seed for Testing----------------//

  var userSeed = [
  	{
  		name: "Arturo Salmeron",
  		username: "asalmeron3",
  		password: "testing1",
  		email: "asalmeron3@gatech.edu"
  	},
  	{
  		name: "Willina Clark",
  		username: "wclark3",
  		password: "testing2",
  		email: "wclark3@gatech.edu"
  	},
  	{
  		name: "Yu Jung Jung",
  		username: "yjung3",
  		password: "testing3",
  		email: "yjung3@gatech.edu"
  	},
  ];
// ---------------------------------------------//


// ---------------   Add to DB   --------------//
  db.Users
  	.remove({})
  	.then(() => db.Users.collection.insertMany(userSeed))
  	.then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
//--------------------------------------------//




