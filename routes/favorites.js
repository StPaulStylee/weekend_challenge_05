var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'rho'
};

var pool = new pg.Pool(config);

router.post('/', function(req, res){
  pool.connect(function(err, client, done){
    try {
      if(err){
        console.log('Error connecting to the DB', err);
        res.sendStatus(500);
        return;
      }
      client.query('INSERT INTO favorites (url, comments) VALUES ($1, $2) returning *', [req.body.url, req.body.comments],
        function(err, result){
          if(err){
            console.log('Error querying the DB', err);
            res.sendStatus(500);
            return;
          }
          console.log('Success querying the DB!', result.rows);
          res.send(result.rows)
        });
    }
    finally {
      done();
    }
  });//End of pool.connect
})//End of post request

router.get('/', function(req, res){
  pool.connect(function(err, client, done){
    try {
      if(err){
        console.log('Error connecting to the DB', err);
        res.sendStatus(500);
        return;
      }
      client.query('SELECT * FROM favorites ',
        function(err, result){
          if(err){
            console.log('Error querying the DB', err);
            res.sendStatus(500);
            return;
          }
          console.log('Success querying the DB!', result.rows);
          res.send(result.rows)
        });
    }
    finally {
      done();
    }
  });//End of pool.connect
})//End of GET request

module.exports = router;
