import axios from "axios";

const BASEURL = "https://www.googleapis.com/civicinfo/v2/representatives?levels=country&roles=legislatorUpperBody&roles=legislatorLowerBody&address=";
const APIKEY = "&key=AIzaSyA7DKuMXwSBV5QJqF2SLBYjf_8rZyNqCu4";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};