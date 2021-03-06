const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({date:-1});
        res.send(posts);
    } catch(error) {
        res.send({ message: error });
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        content: req.body.content
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(error) {
        res.json({ message: error });
    }
});

module.exports = router;