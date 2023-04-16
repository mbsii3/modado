const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const postsCtrl = require('../../controllers/api/posts');

router.get('/', ensureLoggedIn, postsCtrl.index);
router.get('/:userId/posts', ensureLoggedIn, postsCtrl.userPostsIndex);
router.get('/:id', ensureLoggedIn, postsCtrl.getPost);
router.post('/', ensureLoggedIn, postsCtrl.create);
router.post('/:postId/comment', ensureLoggedIn, postsCtrl.createComment);
router.get('/:postId/comments/all', ensureLoggedIn, postsCtrl.getComments);
router.put('/update', ensureLoggedIn, postsCtrl.updatePost);
router.delete('/delete', ensureLoggedIn, postsCtrl.delete);

module.exports = router;