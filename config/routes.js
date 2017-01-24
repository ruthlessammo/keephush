const router = require('express').Router();

const authController = require('../controllers/auth');
const usersController = require('../controllers/users');
// const oauthController = require('../controllers/oauth');
// const secureRoute = require('../lib/secureRoute');


router
  .post('/login', authController.login)
  .post('/register', authController.register);
  // .post('/auth/facebook', oauthController.facebook)


router.route('/users')
  .get(usersController.index);

router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update);

module.exports = router;
