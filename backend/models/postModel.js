const pool = require('./database');

const Post = {
    create: async (title, body, userId) => {
        const result = await pool.query('INSERT INTO posts (title, body, user_id) VALUES ($1, $2, $3) RETURNING *', [title, body, userId]);
        return result.rows[0];
    },
    getAll: async () => {
        const result = await pool.query('SELECT * FROM posts');
        return result.rows;
    },
    update: async (id, title, body) => {
        const result = await pool.query('UPDATE posts SET title = $1, body = $2 WHERE id = $3 RETURNING *', [title, body, id]);
        return result.rows[0];
    },
    delete: async (id) => {
        await pool.query('DELETE FROM posts WHERE id = $1', [id]);
    }
};

module.exports = Post;