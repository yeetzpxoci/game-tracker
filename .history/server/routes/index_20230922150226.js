var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Homepage');
});

router.get('/games', gameController.game_list);

router.post('/games/add', gameController.add_game_post);

router.get('/genres', genreController.genre_list);

module.exports = router;
