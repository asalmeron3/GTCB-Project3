import axios from "axios";
const BASEURL = "https://www.googleapis.com/civicinfo/v2/representatives?levels=country&roles=legislatorUpperBody&roles=legislatorLowerBody&address=";
const APIKEY = "&key=AIzaSyA7DKuMXwSBV5QJqF2SLBYjf_8rZyNqCu4";

export default {
  // Saves a user to the database
  addUser: function(userData) {
  	console.log(userData + " at api.js");
    return axios.post("/api/user/signup", userData);
  },
  search: function(query) {
	return axios.get(BASEURL + query + APIKEY);
  }
};