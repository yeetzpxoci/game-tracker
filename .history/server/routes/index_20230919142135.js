var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"records": ["Test1", "Test2", "Test3"]});
});

module.exports = router;
