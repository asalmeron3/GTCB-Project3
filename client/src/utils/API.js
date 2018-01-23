import axios from "axios";

export default {
  // Saves a user to the database
  addUser: function(userData) {
  	console.log(userData + " at api.js");
    return axios.post("/signup", userData);
  }
};
