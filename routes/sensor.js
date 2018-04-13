var express = require('express');
var router = express.Router();
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://mongosys.wwd.local:27017/ups';

/* GET sensor. */
router.get('/', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    let ConnectMsg = 'Connecting';
    if (err) {
      ConnectMsg = 'Error:' + err.message;
    } else {
      ConnectMsg = 'Connected!';
    }

    let data = {title: 'Sensor', status: ConnectMsg};

    res.render('sensor/home', data);
  });
});

router.get('/add', function (req, res, next) {
  let data = {title: 'Sensor Add'};
  res.render('sensoradd', data);
});

// Add the data to sensor table.
router.post('/add', function (req, res, next) {
  let data = req.body;

  // first check to see if we have any data.
  function isvalid(d) {
    let result = true;
    // check to see if we have any data.
    if (d == undefined) {
      result = false;
    }
    return result;
  }


  function sendInvalidMessage() {
    let msg =
      'Submitted data is invalid.  Please retry.\n' +
      JSON.stringify(data);
    res.send(msg);
  }

  function success() {
    let msg = 'Success!\n' + JSON.stringify(data);
    res.send(msg);
  }

  if (isvalid(data)) {
    success();
  } else {
    sendInvalidMessage();
  }

});

router.get('/delete/:id', function (req, res, next) {
  let id = req.params.id;
  let data = {title: 'Sensor Delete', id: id};
  res.render('sensordelete', data);
});

router.get('/edit/:id', function (req, res, next) {
  let id = req.params.id;
  let data = {title: 'Sensor Edit', id: id};
  res.render('sensoredit', data);
});

module.exports = router;
