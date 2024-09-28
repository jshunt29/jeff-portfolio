import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
    // State to store the blog posts and any error message
    const [blogPosts, setBlogPosts] = useState([]);
    const [error, setError] = useState(null);

    // useEffect will run once when the component mounts to fetch blog posts
    useEffect(() => {
        // Fetch blog posts from the backend
        axios.get('http://localhost:5000/blog')  // Make sure your backend is running on port 5000
            .then(res => {
                setBlogPosts(res.data);  // Store the fetched posts in state
            })
            .catch(err => {
                console.error('Error fetching blog posts:', err);
                setError('Failed to load blog posts');  // Handle any errors
            });
    }, []);

    return (
        <section className="blog-section">
            <h2>Blog</h2>

            {/* Show error message if fetching failed */}
            {error && <p className="error-message">{error}</p>}

            {/* If there are blog posts, display them */}
            <div className="blog-posts">
                {blogPosts.length > 0 ? (
                    blogPosts.map(post => (
                        <div key={post.id} className="blog-post">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No blog posts available</p>  // Show message if no posts are available
                )}
            </div>
        </section>
    );
};

export default Blog;
