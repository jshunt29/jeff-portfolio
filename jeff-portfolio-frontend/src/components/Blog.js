import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);  // Track the current page
    const [totalPages, setTotalPages] = useState(1);  // Track total pages

    // Fetch blog posts based on the current page
    useEffect(() => {
        axios.get(`http://localhost:5000/blogs?page=${page}&limit=10`)  // Adjust 'limit' as needed
            .then((response) => {
                console.log(response.data);
                setBlogPosts(response.data.blogs);  // Store the blog posts
                setTotalPages(response.data.totalPages);  // Update the total number of pages
            })
            .catch((err) => {
                console.error('Error fetching blog posts:', err);
                setError('Failed to load blog posts');
            });
    }, [page]);  // Refetch posts when the 'page' state changes

    // Navigate to the next page
    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    // Navigate to the previous page
    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="blog-page">
            <h2>Blog Posts</h2>

            {/* Error message */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Displaying blog posts */}
            <div className="blog-posts">
                {blogPosts.length > 0 ? (
                    blogPosts.map((post) => (
                        <div key={post.id} className="blog-post">
                            <h3>{post.tag_line}</h3>
                            <p><strong>Author:</strong> {post.author}</p>
                            <p>{post.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No blog posts found.</p>
                )}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={page === 1}>
                    Previous
                </button>
                <span> Page {page} of {totalPages} </span>
                <button onClick={handleNextPage} disabled={page === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Blog;