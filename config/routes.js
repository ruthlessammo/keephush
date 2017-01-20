const router = require('express').Router();

const authController = require('../controllers/auth');
// const oauthController = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');


router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .post('/auth/facebook', oauthController.facebook)


router.route('/users')
  .get(usersController.index)
  .post(secureRoute, usersController.create);

router.route('/users/:id')
  .get(usersController.show)
  .put(secureRoute, usersController.update)
  .delete(secureRoute, usersController.delete);

module.exports = router;
