const express = require('express');
const cors = require('cors');
var unirest = require("unirest");
const app = express();
require('dotenv').config();

app.get('/getnews',cors(),(req,res)=>{
  var req = unirest("GET", "https://bing-news-search1.p.rapidapi.com/news");

    req.query({
      "mkt": "en-IN",
      "safeSearch": "Off",
      "textFormat": "Raw",
      "count":50,
      "headli"
    });

    req.headers({
      "x-bingapis-sdk": "true",
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "useQueryString": true
    });


    req.end(function (resp) {
      if (resp.error) throw new Error(resp.error);
    
    console.log(resp.body);
    res.json(resp.body.value);
  });
})

app.get('/api/test', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'Jay', lastName: 'Gandhi'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);