var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.send("Hola mundo");
});

router.get("/getEndpoint", (req, res) => {
    res.send({
        endpoint : process.env.ENDPOINT_WS
    });
});

module.exports = router;
