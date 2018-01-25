

$.ajax({
         url: "https://api.propublica.org/congress/v1/members/senate/RI/current.json",
         type: "GET",
         dataType: 'json',
         headers: {'X-API-Key': 'HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'}
       }).done(function(data){
       console.log(data)
       });


<Request
  instance={axios.create({})} /* custom instance of axios - optional */
  method="get" /* get, delete, head, post, put and patch - required */
  url="https://api.propublica.org/congress/v1/members/senate/RI/current.json" /*  url endpoint to be requested - required */
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