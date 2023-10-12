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
router.post('/games/update', gameController.validateGameInput, gameController.updateGame);

router.get('/genres', genreController.genreList);
router.post('/genres/add', genreController.validateGenreInput, genreController.addGenre);
router.post('/genres/delete', genreController.deleteGenre);
router.post('/genres/update', genreController.validateGenreInput, genreController.updateGenre);

module.exports = router;
