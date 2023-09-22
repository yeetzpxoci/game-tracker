var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Homepage');
});

router.get('/games', gameController.game_list);

router.get('/games/add', gameController.add_game_post);

// router.get('/games', );

module.exports = router;
