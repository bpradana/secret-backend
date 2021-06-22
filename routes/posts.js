const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const moment = require('moment');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({date: -1});
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

router.delete('/', async (req, res) => {
    try {
        max_date = moment(Date.now()).subtract(24, 'hours');
        const deletedPost = await Post.deleteMany({date: {$lte:  max_date}})
        res.send(deletedPost)
    } catch(error) {
        res.send({ message: error })
    }
});

module.exports = router;