const router = require('express').Router();

const authController = require('../controllers/auth');
const usersController = require('../controllers/users');
const programmesController = require('../controllers/programmes');
// const oauthController = require('../controllers/oauth');
// const secureRoute = require('../lib/secureRoute');

//login and reg
router
  .post('/login', authController.login)
  .post('/register', authController.register);
// .post('/auth/facebook', oauthController.facebook)

// user routes
router.route('/users')
  .get(usersController.index);
router.route('/users/:id')
  .get(usersController.show)
  .put(usersController.update);

// programme routes
router.route('/programmes')
  .get(programmesController.index)
  .post(programmesController.create);
router.route('/programmes/:id')
  .get(programmesController.show)
  .put(programmesController.update)
  .delete(programmesController.delete);

module.exports = router;
