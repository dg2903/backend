var express = require('express');
var bodyParser = require('body-parser');
var Twitter = require('twitter');
var cors = require('cors');



var app = express();
app.use(cors()); //let other apps make cross domain requests

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var client = new Twitter ({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

app.get('/', function (req, res) {

});

app.get('/twitter', function (req, res) {
  client.get('statuses/user_timeline.json?count=2', function(error, tweets, response) {
    if(error){
      console.log(error);
    }
    else {
      var tw = [];
      tweets.map(function(content){ tw.push(content.text)})
      res.send(tw);
    }
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
