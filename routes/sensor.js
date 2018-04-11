var express = require('express');
var router = express.Router();
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://mongosys.wwd.local:27017/ups';

/* GET sensor. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db) {
    let ConnectMsg = 'Connecting';
    if ( err ) {
      ConnectMsg = 'Error:' + err.message;
    } else {
      ConnectMsg = 'Connected!';
    }

    let data = { title: 'Sensor', status: ConnectMsg };

    res.render('sensor',data);
  });
});

router.get('/add', function(req, res, next) {
    let data = { title: 'Sensor Add'};
    res.render('sensoradd',data);
});

router.post('/add', function(req, res, next) {
    let data = req.body;
    res.send(JSON.stringify(data));
});

router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id;
  let data = { title: 'Sensor Delete', id: id};
  res.render('sensordelete',data);
});

router.get('/edit/:id', function(req, res, next) {
  let id = req.params.id;
  let data = {title: 'Sensor Edit', id: id};
  res.render('sensoredit', data);
});

module.exports = router;
