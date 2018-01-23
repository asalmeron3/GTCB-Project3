const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('15b928baec3648afbf5fe290acd1df58');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'Name',
//   category: 'politics',
//   language: 'en',
//   country: 'us',
//   from: today(),
//   sortBy: popularity
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });



var url = 'https://newsapi.org/v2/everything?' +
          'q=NAME&' +
          'from=2018-01-23&' +
          'sortBy=popularity&' +
          newsapi;

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })