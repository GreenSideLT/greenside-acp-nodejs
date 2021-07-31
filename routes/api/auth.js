const router = require('express').Router();
const routeValidation = require('../../requests/login');
const AuthController = require('../../controllers/AuthController');
const authenticatedMiddleware = require('../../middlewares/authenticatedMiddleware');

router.post('/login', routeValidation, AuthController.login);
router.get('/attempt', authenticatedMiddleware, AuthController.attempt);

module.exports = router;
