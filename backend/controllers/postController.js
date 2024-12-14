// postController.js
const pool = require('../config/database');

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "posttable"');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

// Create a new post
exports.createPost = async (req, res) => {
    const { title, body, urllink } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO "posttable" (title, body, urllink) VALUES ($1, $2, $3) RETURNING *',
            [title, body, urllink]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create post' });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, body, urllink } = req.body;
    try {
        const result = await pool.query(
            'UPDATE "posttable" SET title = $1, body = $2, urllink = $3 WHERE id = $4 RETURNING *',
            [title, body, urllink, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update post' });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'DELETE FROM "posttable" WHERE id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete post' });
    }
};