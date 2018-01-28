const express = require('express');
const twitterAPI = require('node-twitter-api');

const router = express.Router();

const twitter = new twitterAPI({
    consumerKey: 'Jt9yYf668aUb6RxopZGaIbcu6',
    consumerSecret: 'YhC4qwiPjMe9XPsNavevK2sLZExqwdjXZsfmXdErM0Uo8uMa7b',
    access_token_key: '918600732126990336-Bd3bPVEOFTogb7yq4mf6xaYg0hj6zxM',
    access_token_secret: 'Lf3n1k06KcH6K8rLzmXd40FZN0ZhjrJ2YGxr6L6JMQhpg'
});

const params = {
	how can i get id of rep...? 
	q = @id,
	count: 10,
  	result_type: 'recent',
  	lang: 'en'
}

twitter.get('search/tweets', params, function(err, data, response) {
  if(!err){

  	console.log(data)
   
   // for(var i =0; i < data.statuses.length; i++){


   // }


  } else {
    console.log(err);
  }
})



<Request
  instance={axios.create({})}  custom instance of axios - optional 
  method="get" /* get, delete, head, post, put and patch - required */
  url="https://api.twitter.com/1.1/search/tweets.json?q=realDonaldTrump&result_type=recent&count=10" /*  url endpoint to be requested - required */
  data={} /* post data - optional */
  params={} /* queryString data - optional */
  config={} /* axios config - optional */
  debounce={200} /* minimum time between requests events - optional */
  debounceImmediate={true} /* make the request on the beginning or trailing end of debounce - optional */
  isReady={true} /* can make the axios request - optional */
  onSuccess={(response)=>{}} /* called on success of axios request - optional */
  onLoading={()=>{}} /* called on start of axios request - optional */
  onError=(error)=>{} /* called on error of axios request - optional */
/>

//axios
axios({
  method:'get',
  url:'https://newsapi.org/v2/top-headlines?q=donaltrump&country=us&apiKey=15b928baec3648afbf5fe290acd1df58',
  responseType:'stream'
}).then(function(response) {
  
  
});