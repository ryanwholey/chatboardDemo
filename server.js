var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('./'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var messages = [];

app.get('/messages', function(req, res, next){
  res.send(messages);
});

app.post('/messages', function(req, res, next){
  messages.push(req.body.text);
  console.log(messages);
  res.send('okay');
})

app.listen(7000);