var express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController')
const genreController = require('../controllers/genreController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Homepage');
});

router.get('/games', gameController.gameList);

router.post('/games/add', gameController.validateGameInput, gameController.addGame);

router.post('/games/delete', gameController.deleteGame);

router.get('/genres', genreController.genreList);

module.exports = router;
