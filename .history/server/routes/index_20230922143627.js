var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Homepage');
});

router.get('/games', gameController.gameList);

router.post('/games/add', gameController.addGamePost);

// router.get('/games', );

module.exports = router;
