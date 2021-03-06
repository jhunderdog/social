const exprees = require('express');
const router = require('express-promise-router')();

const UserController = require('../controllers/users');

router.route('/signup')
    .post(UserController.signUp);

router.route('/signin')
    .post(UserController.signIn);

router.route('/secret')
    .post(UserController.secret);

module.exports = router;