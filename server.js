var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var firstNumber = 0;
var secondNumber = 0;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/add', function (req, res) {
  var num = number(req.body.firstNum) + number(req.body.secNum);
  res.send({num});
  console.log(num);
});

app.post('/sub', function (req, res) {
  var num = number(req.body.firstNum) - number(req.body.secNum);
  res.send({num});
});

app.post('/mul', function (req, res) {
  var num = number(req.body.firstNum) * number(req.body.secNum);
  res.send({num});
});

app.post('/div', function (req, res) {
  var num = number(req.body.firstNum) / number(req.body.secNum);
  res.send({num});
});



app.listen(3000);
