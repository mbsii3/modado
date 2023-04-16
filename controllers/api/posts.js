const Post = require('../../models/post');

module.exports = {

    index,
    userPostsIndex,
    create,
    getPost,
    updatePost,
    delete: deletePost, 
    createComment,
    getComments
}

async function index(req, res) {
    try {
        const allPosts = await Post.find({})
        .populate('user').sort({createdAt: 'desc'});
        res.json(allPosts)
    } catch (err) {
        res.json(400)
    }
}

async function userPostsIndex(req, res) {
    try {
        const userPosts = await Post.where('user')
        .equals(req.params.userId).populate('user')
        .sort({createdAt: 'desc'});
        res.json(userPosts)
    } catch (err) {
        res.json(400)
    }
}

async function getPost(req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.json(400)
    }

}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        const newPost = await Post.create(req.body);
        res.json(newPost);
    } catch (err) {
        res.json(400)
    }
}

async function getComments(req, res) {
    try {
        const post = await Post.findById(req.params.postId)
        .populate( 'comments', 'content');
        res.json(post.comments);
        
    } catch (err) {
        res.json(400)
    }
}

async function createComment(req, res) {
    try {
        const post = await Post.findById(req.params.postId)
        req.body.user = req.user._id
        post.comments.unshift(req.body);
        post.save();
        res.json(post);
        
    } catch (err) {
        res.json(400)
    }
}

async function updatePost(req, res) {
    console.log(req.body)
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.body._id, { $set: {
            content: req.body.content,
        }}, { new: true });
        res.json(updatedPost)
    } catch (err) {
        res.json(400)
    }
}

async function deletePost(req, res) {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.body._id)
        res.json(deletedPost);
    } catch (err) {
        res.json(400)
    }
}