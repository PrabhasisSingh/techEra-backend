var express = require('express');
var router = express.Router();

let playerController = require('../controller/player');



/* GET list of players */
router.get('/playerlist', playerController.playerList);


/* Add Player */
router.post('/playeradd',  playerController.playerAdd);

module.exports = router;