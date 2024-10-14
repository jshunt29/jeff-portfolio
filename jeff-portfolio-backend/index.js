const express = require('express');
const cors = require('cors');
const mysql = require('mysql');  // For MySQL queries

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Use built-in express.json()

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'jhunt',
    password: '35Egss$2',
    database: 'jeff_portfolio'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Routes
app.get('/about', (req, res) => {
    const about = {
        name: "Jeff Hunt",
        bio: "I am an MBA student focusing on finance and marketing, based in Los Angeles. I love all things aquatic and technology-related."
    };
    res.send(about);
});

app.get('/resume', (req, res) => {
    const resume = "Here will be the resume content or file download link.";
    res.send(resume);
});

// Blog Routes using raw MySQL
app.get('/blogs', (req, res) => {
    db.query("SELECT * FROM Blogs", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/blogs', (req, res) => {
    const { author, tag_line, content } = req.body;

    // Validate required fields
    if (!author || !tag_line || !content) {
        return res.status(400).json({ error: "All fields (author, tag_line, content) are required" });
    }

    try {
        // Simple slugify logic
        const slug = tag_line.toLowerCase().replace(/ /g, '-');

        // Updated SQL query with tag_line column
        const sql = 'INSERT INTO Blogs (slug, author, tag_line, content) VALUES (?, ?, ?, ?)';

        db.query(sql, [slug, author, tag_line, content], (err, result) => {
            if (err) {
                console.error('Error inserting blog post:', err);
                return res.status(500).json({ error: 'Database error', details: err });
            }

            res.status(201).json({ message: 'Blog created', id: result.insertId });
        });
    } catch (error) {
        console.error('Unexpected error:', error);  // Catch and log unexpected errors
        res.status(500).json({ error: 'Unexpected server error' });
    }
});


// Portfolio Route using raw MySQL
app.get('/portfolio', (req, res) => {
    db.query("SELECT * FROM portfolio", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Listen on Port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
