const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Ensure this is the correct path to your Sequelize instance
const slugify = require('slugify');  // Import slugify

// Define the Blog model
const Blog = sequelize.define('Blog', {
  slug: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'Blogs',  // Ensure the correct table name
  timestamps: true
});

module.exports = Blog;
