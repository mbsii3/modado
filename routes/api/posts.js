const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const postsCtrl = require('../../controllers/api/posts');

router.get('/', ensureLoggedIn, postsCtrl.index);
router.post('/', ensureLoggedIn, postsCtrl.create);

module.exports = router;