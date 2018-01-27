const express = require('express');
var axios = require('axios')
const NewsAPI = require('newsapi');


const q = "donaldtrump"
//search news w/ name
axios.get('https://newsapi.org/v2/everything?q=donaldtrump&language=en&apiKey=15b928baec3648afbf5fe290acd1df58')
  .then(function (response) {
   for (var i = 0; i < response.data.articles.length; i++){

    console.log(response.data.articles[i].title);
    console.log(response.data.articles[i].description);
    console.log(response.data.articles[i].url);
    console.log(response.data.articles[i].urlToImage);
    console.log(response.data.articles[i].publishedAt);

   }
  })
  .catch(function (error) {
    console.log(error);
  });
