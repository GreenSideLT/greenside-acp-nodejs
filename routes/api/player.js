const router = require('express').Router();
const PlayerController = require('../../controllers/PlayerController');

router.get('/search/:search', PlayerController.search);
router.get('/:name', PlayerController.show);

module.exports = router;
