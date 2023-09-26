var express = require('express');
var router = express.Router();
var gameController = require('../controllers/gameController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Homepage');
});

router.get('/games', gameController.gamel_ist);

router.post('/games/add', gameController.addGamePost);

router.get('/genres', genreController.genreList);

module.exports = router;
