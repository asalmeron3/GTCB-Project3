const express = require('express');
var axios = require('axios')
const NewsAPI = require('newsapi');

export const getarticles (success, error) => {

const keyword = " "

axios.get(`https://newsapi.org/v2/everything?q=${keyword}&language=en&apiKey=15b928baec3648afbf5fe290acd1df58`)

  .then(function (response) {
    success(response.data)
  }

  .catch(function (error) {
    console.log(error);

  });

};


export const getbills (success, error) => {

	const id = "A000360"

  axios({
  method: 'Get',
  url: `https://api.propublica.org/congress/v1/members/${id}/bills/introduced.json`,
  headers: {'X-API-Key':'HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'}

})
  .then(function (response) {
    success(response.data)
  })

  .catch(function (error) {
    console.log(error);
  });
}


export const getbillRecent (success, error) => {

axios({
  method: 'Get',
  url: 'https://api.propublica.org/congress/v1/115/both/bills/introduced.json',
  headers: {'X-API-Key':'HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'}

})
  .then(function (response) {
    success(response.data)

  })
  .catch(function (error) {
    console.log(error);
  });
}


export const getvotes (success, error) => {

axios({
  method: 'Get',
  url: 'https://api.propublica.org/congress/v1/both/votes/recent.json',
  headers: {'X-API-Key':'HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'}

})
  .then(function(response) {
    success(response.data)

  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getsenate (success, error) => {

axios({
  method: 'Get',
  url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
  headers: {'X-API-Key':'HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'}

})
  .then(function(response) {
    success(response.data)

  })
  .catch(function (error) {
    console.log(error);
  });
}

export const gethouse (success, error) => {

axios({
  method: 'Get',
  url: 'https://api.propublica.org/congress/v1/115/house/members.json',
  headers: {'X-API-Key':'HXWtfd9ujNSStymX4icTqOxFPMrk2VZ4aMzvQe88'}

})
  .then(function(response) {
    success(response.data)

  })
  .catch(function (error) {
    console.log(error);
  });
}
