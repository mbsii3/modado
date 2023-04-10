const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const postsCtrl = require('../../controllers/api/posts');

router.post('/', ensureLoggedIn, postsCtrl.create);

module.exports = router;