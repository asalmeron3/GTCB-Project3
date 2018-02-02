import axios from "axios";
const BASEURL = "https://www.googleapis.com/civicinfo/v2/representatives?levels=country&roles=legislatorUpperBody&roles=legislatorLowerBody&address=";
const APIKEY = "&key=AIzaSyA7DKuMXwSBV5QJqF2SLBYjf_8rZyNqCu4";
const ArticleURL1= "https://newsapi.org/v2/everything?q=$";
const ArticleURL2 = "&language=en&apiKey=15b928baec3648afbf5fe290acd1df58";
export default {
  // Saves a user to the database
  addUser: function(userData) {
  	// console.log(userData + " at api.js");
    return axios.post("/api/auth/signup", userData);
  },
  search: function(query) {
	return axios.get(BASEURL + query + APIKEY);
  },
  updateAddress: function(userLocation) {
    return axios.post("/api/auth/location", userLocation);
  },
  loginUser: function(userLogin){
    return axios.post("/api/auth/login",userLogin);
  },
  getAddressAndPic: function(){
    return axios.get("/api/auth/location");
  },
  addPic: function(picURL){
    return axios.post("/api/auth/pic", picURL);
  },
  getArticles:function(keyword){
    return axios.get(ArticleURL1 + keyword +ArticleURL2);
  },
  getTweets: function(userid) {
    return axios.get("/api/twitterfeed/" + userid);
  }

};

