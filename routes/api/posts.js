const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const postsCtrl = require('../../controllers/api/posts');

router.get('/', ensureLoggedIn, postsCtrl.index);
router.get('/:id', ensureLoggedIn, postsCtrl.getPost);
router.post('/', ensureLoggedIn, postsCtrl.create);
router.put('/update', ensureLoggedIn, postsCtrl.updatePost);

module.exports = router;