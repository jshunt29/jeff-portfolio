import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState({ id: null, tag_line: '', author: 'Jeff Hunt', content: '' });  // Default author
    const [error, setError] = useState(null);
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    // Fetch blog posts
    const fetchPosts = () => {
        axios.get('http://localhost:5000/blogs')
            .then((response) => {
                setBlogPosts(response.data.blogs);
            })
            .catch((err) => {
                console.error('Error fetching blog posts:', err);
                setError('Failed to load blog posts');
            });
    };

    // Create a new blog post with JWT token
    const createPost = () => {
        const token = localStorage.getItem('token');  // Get the JWT token from localStorage
        axios.post('http://localhost:5000/blogs', currentPost, {
            headers: {
                Authorization: `Bearer ${token}`,  // Attach the token in the Authorization header
            },
        })
            .then((response) => {
                fetchPosts();  // Refresh posts after adding a new one
                setCurrentPost({ id: null, tag_line: '', author: 'Jeff Hunt', content: '' });  // Reset form and default author
            })
            .catch((err) => {
                console.error('Error creating blog post:', err);
                setError('Failed to create blog post');
            });
    };

    // Edit an existing blog post with JWT token
    const editPost = (id) => {
        const token = localStorage.getItem('token');  // Get the JWT token from localStorage
        axios.put(`http://localhost:5000/blogs/${id}`, currentPost, {
            headers: {
                Authorization: `Bearer ${token}`,  // Attach the token in the Authorization header
            },
        })
            .then((response) => {
                fetchPosts();  // Refresh posts after editing
                setCurrentPost({ id: null, tag_line: '', author: 'Jeff Hunt', content: '' });  // Reset the form and default author
            })
            .catch((err) => {
                console.error('Error editing blog post:', err);
                setError('Failed to edit blog post');
            });
    };

    // Delete a blog post with JWT token
    const deletePost = (id) => {
        const token = localStorage.getItem('token');  // Get the JWT token from localStorage
        axios.delete(`http://localhost:5000/blogs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,  // Attach the token in the Authorization header
            },
        })
            .then((response) => {
                fetchPosts();  // Refresh posts after deleting one
            })
            .catch((err) => {
                console.error('Error deleting blog post:', err);
                setError('Failed to delete blog post');
            });
    };

    const handleEditClick = (post) => {
        setCurrentPost(post);
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === 'chance22') {
            setAuthenticated(true);
        } else {
            setError('Invalid password');
        }
    };

    if (!authenticated) {
        return (
            <div>
                <h2>Admin Login</h2>
                <form onSubmit={handlePasswordSubmit}>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        );
    }

    return (
        <div className="admin-page">
            <h2>Admin Panel</h2>

            {/* Error message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Create/Edit Post Form */}
            <div className="create-post">
                <h3>{currentPost.id ? 'Edit Post' : 'Create a New Post'}</h3>
                <input
                    type="text"
                    placeholder="Tagline"
                    value={currentPost.tag_line}
                    onChange={(e) => setCurrentPost({ ...currentPost, tag_line: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={currentPost.author}
                    onChange={(e) => setCurrentPost({ ...currentPost, author: e.target.value })}
                />
                <textarea
                    placeholder="Content"
                    value={currentPost.content}
                    onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                />
                {currentPost.id ? (
                    <button onClick={() => editPost(currentPost.id)}>Update Post</button>
                ) : (
                    <button onClick={createPost}>Create Post</button>
                )}
            </div>

            {/* Display Blog Posts */}
            <div className="blog-posts">
                <h3>Manage Blog Posts</h3>
                {blogPosts.length > 0 ? (
                    blogPosts.map((post) => (
                        <div key={post.id} className="blog-post">
                            <h4>{post.tag_line}</h4>
                            <p><strong>Author:</strong> {post.author}</p>
                            <p>{post.content}</p>
                            <div className="post-actions">
                                <button onClick={() => handleEditClick(post)}>Edit</button>
                                <button onClick={() => deletePost(post.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No blog posts found.</p>
                )}
            </div>
        </div>
    );
};

export default Admin;
