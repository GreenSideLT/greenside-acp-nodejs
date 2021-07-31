const router = require('express').Router();
const authenticatedMiddleware = require('../../middlewares/authenticatedMiddleware');

router.use('/auth', require('./auth'));
router.use('/players', authenticatedMiddleware, require('./player'));

module.exports = router;
