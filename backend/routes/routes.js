const express = require('express');
const { register, login } = require('./userController');
const Post = require('./postModel');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.getAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});
router.post('/posts', async (req, res) => {
    const { title, body, userId } = req.body;
    try {
        const post = await Post.create(title, body, userId);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
});

module.exports = router;


/*const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes for posts
router.get('/posts', postController.getAllPosts);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router; */