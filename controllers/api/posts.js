const Post = require('../../models/post');

module.exports = {

    index,
    create
}

async function index(req, res) {
    try {
        const allPosts = await Post.find({});
        res.json(allPosts)
    } catch (err) {
        res.json(400)
    }
}

async function create(req, res) {
    try {
        req.body.firstName = req.user.firstName
        req.body.lastName = req.user.lastName
        req.body.userName = req.user.userName
        req.body.userName = req.user.userName
        req.body.user = req.user._id
        const newPost = await Post.create(req.body);
        console.log(newPost);
        res.json(newPost);
    } catch (err) {
        res.json(400)
    }
}