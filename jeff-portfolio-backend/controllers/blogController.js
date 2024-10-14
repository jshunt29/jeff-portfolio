const db = require('../config/database');
const slugify = require('slugify');

// Create a new blog post
exports.createBlog = (req, res) => {
  const { author, desc, content } = req.body;

  if (!author || !desc || !content) {
    return res.status(400).json({ error: 'All fields (author, desc, content) are required' });
  }

  // Generate slug using slugify
  const slug = slugify(desc, { lower: true, strict: true });
  const date = new Date();

  // SQL query to insert a new blog post
  const sql = 'INSERT INTO Blogs (slug, date, author, desc, content) VALUES (?, ?, ?, ?, ?)';

  db.query(sql, [slug, date, author, desc, content], (err, result) => {
    if (err) {
      console.error('Error occurred while creating the blog:', err);
      return res.status(500).json({ error: 'Database error', details: err });
    }
    res.status(201).json({ message: 'Blog created successfully', id: result.insertId });
  });
};

// Retrieve all blog posts
exports.getAllBlogs = (req, res) => {
  const sql = 'SELECT * FROM Blogs';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error retrieving blogs:', err);
      return res.status(500).json({ error: 'Database error', details: err });
    }
    res.status(200).json(results);
  });
};
