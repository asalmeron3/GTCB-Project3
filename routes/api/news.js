const express = require('express');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('15b928baec3648afbf5fe290acd1df58');

//react-axios
<Request
  instance={axios.create({})} /* custom instance of axios - optional */
  method="get" /* get, delete, head, post, put and patch - required */
  url="https://newsapi.org/v2/top-headlines?q=donaltrump&country=us&apiKey=15b928baec3648afbf5fe290acd1df58" /*  url endpoint to be requested - required */
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