const express = require('express');
const twitterAPI = require('node-twitter-api');
var axios = require('axios')
const router = express.Router();

axios({
  method: 'Get',
  url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+realDonaldTrump+'&count=10',
  headers: {'consumerKey': 'Jt9yYf668aUb6RxopZGaIbcu6',
           'consumerSecret': 'YhC4qwiPjMe9XPsNavevK2sLZExqwdjXZsfmXdErM0Uo8uMa7b',
           'access_token_key': '918600732126990336-Bd3bPVEOFTogb7yq4mf6xaYg0hj6zxM',
           'access_token_secret': 'Lf3n1k06KcH6K8rLzmXd40FZN0ZhjrJ2YGxr6L6JMQhpg'}

})
  .then(function (response) {

    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });