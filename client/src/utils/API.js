import axios from "axios";
const BASEURL = "https://www.googleapis.com/civicinfo/v2/representatives?levels=country&roles=legislatorUpperBody&roles=legislatorLowerBody&address=";
const APIKEY = "&key=AIzaSyA7DKuMXwSBV5QJqF2SLBYjf_8rZyNqCu4";
const ArticleURL1= "https://newsapi.org/v2/everything?sources=cnn&q=$";
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
  UserInfoFromDB: function(){
    return axios.get("/api/auth/location");
  },
  addPic: function(picURL){
    return axios.post("/api/auth/pic", picURL);
  },
  getBillsfromDB:function(selectedBill){
    return axios.get('/api/auth/bills', selectedBill)
  },
  saveBilltoUser:function(postedBill){
    return axios.post('/api/auth/bills', postedBill)
  },
  getArticles:function(keyword){
    return axios.get(ArticleURL1 + keyword +ArticleURL2);
  },
  getTweets:function(twitterHandle){
    return axios.get("/twitterfeed/"+twitterHandle);
  },
  saveBillToDB:function(ObjectOfBillTitleAndDescription){
    return axios.post("/api/bill",ObjectOfBillTitleAndDescription);
  },
  deleteBillFromDB:function(JustTheBillTitle){
    return axios.delete("/api/bill",JustTheBillTitle);
  },
  //get info of senate
  getSenate: function(state){
    return axios.get("/members/senate/"+state)
  },
  //get info of house
  getHouse: function(state, district){
    return axios.get("/members/house/" +state+"/"+ district)
  },
  getProbills: function(member_id){
    return axios.get("/bills/"+ member_id)
  },
  getRecentbills: function(){
    return axios.get("/recentbills")
  },
  getRecentvotes: function(){
    return axios.get("/recentvotes")
  },
  getMemberInfo: function(member_id){
    return axios.get("/members/" + member_id)
  }

};

