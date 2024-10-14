const Blog = require('../models/Blog');  // Import the Blog model

// GET: Retrieve all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();  // Fetch all blogs from the database
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching blogs' });
  }
};

// POST: Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { author, desc, content } = req.body;
    const newBlog = await Blog.create({ author, desc, content });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the blog' });
  }
};

// GET: Retrieve a blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ where: { slug } });
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the blog' });
  }
};
