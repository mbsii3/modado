const Post = require('../../models/post');

module.exports = {

    index,
    create,
    getPost,
    updatePost
}

async function index(req, res) {
    try {
        const allPosts = await Post.find({}).populate('user').sort({createdAt: 'desc'});
        res.json(allPosts)
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
        console.log(newPost);
        res.json(newPost);
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
        console.log(updatedPost);
        res.json(updatedPost)
    } catch (err) {
        res.json(400)
    }
}