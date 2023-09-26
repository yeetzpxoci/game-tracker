var express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')
const gameController = require('../controllers/genreController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Homepage');
});

router.get('/games', gameController.game_list);

router.post('/games/add', gameController.add_game_post);

router.get('/genres', genreController.genre_list);

module.exports = router;
