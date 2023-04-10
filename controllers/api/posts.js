const Post = require('../../models/post');

module.exports = {

    index,
    create
}

async function index(req, res) {
    try {
        const allPosts = await Post.find({}).populate('user').sort({createdAt: 'desc'});
        res.json(allPosts)
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