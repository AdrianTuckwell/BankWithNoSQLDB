var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// get request from database --------------------------------
app.get('/accounts', function(req, res){
  var url = 'mongodb://localhost:27017/bank';
  MongoClient.connect(url, function(err, db){
    var collection = db.collection('accounts');
    collection.find({}).toArray(function(err, docs){
      res.json(docs);
      db.close();
    })
  })
})

// post request to database ----------------------------------
app.post('/accounts', function(req, res){
  var url = 'mongodb://localhost:27017/bank';
  MongoClient.connect(url, function(err, db){
    var collection = db.collection('accounts');
    collection.insert(
      {
        "owner": req.body.owner,
        "amount": req.body.amount,
        "type": req.body.type
      }
    )
    res.status(200).end();
    db.close();
  });
});

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});