const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users');
const authenticate = require('../middleware/auth');

router
  .route('/')
  .post(UsersController.create)
  .all(authenticate)
  .get(UsersController.read);

module.exports = router;
