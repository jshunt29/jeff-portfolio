const express = require('express');
const cors = require('cors');
const mysql = require('mysql');  // For MySQL queries
const { router: authRoutes, verifyToken } = require('./routes/authRoutes');  // Import the auth routes and verifyToken
const app = express();

require('dotenv').config();  // Load environment variables from .env file

// Middleware
app.use(cors());
app.use(express.json());  // Use built-in express.json()

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes

// GET /blogs - Retrieve paginated blog posts with total count
app.get('/blogs', (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const countQuery = "SELECT COUNT(*) AS total FROM Blogs";
    db.query(countQuery, (err, countResult) => {
        if (err) {
            console.error('Error counting blog posts:', err);
            return res.status(500).json({ error: 'Database error', details: err });
        }

        const total = countResult[0].total;
        const totalPages = Math.ceil(total / limit);

        const sql = "SELECT * FROM Blogs LIMIT ? OFFSET ?";
        db.query(sql, [parseInt(limit), parseInt(offset)], (err, results) => {
            if (err) {
                console.error('Error retrieving blog posts:', err);
                return res.status(500).json({ error: 'Database error', details: err });
            }

            res.json({
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                totalPages,
                blogs: results
            });
        });
    });
});

// Secure /blogs CRUD routes with verifyToken middleware
app.post('/blogs', verifyToken, (req, res) => {
    const { author, tag_line, content } = req.body;

    if (!author || !tag_line || !content) {
        return res.status(400).json({ error: "All fields (author, tag_line, content) are required" });
    }

    try {
        const slug = tag_line.toLowerCase().replace(/ /g, '-');
        const sql = 'INSERT INTO Blogs (slug, author, tag_line, content) VALUES (?, ?, ?, ?)';

        db.query(sql, [slug, author, tag_line, content], (err, result) => {
            if (err) {
                console.error('Error inserting blog post:', err);
                return res.status(500).json({ error: 'Database error', details: err });
            }

            res.status(201).json({ message: 'Blog created', id: result.insertId });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Unexpected server error' });
    }
});

app.put('/blogs/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    const { tag_line, author, content } = req.body;

    if (!tag_line || !author || !content) {
        return res.status(400).json({ error: "All fields (tag_line, author, content) are required" });
    }

    const sql = "UPDATE Blogs SET tag_line = ?, author = ?, content = ? WHERE id = ?";
    db.query(sql, [tag_line, author, content, id], (err, result) => {
        if (err) {
            console.error('Error updating blog post:', err);
            return res.status(500).json({ error: 'Database error', details: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.status(200).json({ message: 'Blog updated successfully' });
    });
});

app.delete('/blogs/:id', verifyToken, (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM Blogs WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting blog post:', err);
            return res.status(500).json({ error: 'Database error', details: err });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        res.status(200).json({ message: 'Blog deleted successfully' });
    });
});

// Listen on Port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
