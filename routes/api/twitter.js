const Twitter = require('twitter');
const request = require('request');
const fs = require("fs");

 
const client = new Twitter({
  consumer_key: 'Jt9yYf668aUb6RxopZGaIbcu6',
  consumer_secret: 'YhC4qwiPjMe9XPsNavevK2sLZExqwdjXZsfmXdErM0Uo8uMa7b',
  access_token_key: '918600732126990336-Bd3bPVEOFTogb7yq4mf6xaYg0hj6zxM',
  access_token_secret: 'Lf3n1k06KcH6K8rLzmXd40FZN0ZhjrJ2YGxr6L6JMQhpg'
});
 
const params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


function tweet() {
	
}