const express = require('express');
var axios = require('axios')

//serach bill w/publisher
const memberid = "W000802"



axios({
  method: 'Get',
  url: 'https://api.propublica.org/congress/v1/members/W000802/bills/introduced.json',
  headers: {'X-API-Key':'HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'}

})
  .then(function (response) {


   for (var i = 0; i <response.data.results.length; i++){
    console.log(response.data.results[i])

   }

  })
  .catch(function (error) {
    console.log(error);
  });
