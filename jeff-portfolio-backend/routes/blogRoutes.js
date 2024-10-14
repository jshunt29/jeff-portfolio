// Blog Routes using raw MySQL queries

app.get('/blogs', (req, res) => {
    const sql = "SELECT * FROM Blogs";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error retrieving blog posts:', err);
            return res.status(500).json({ error: 'Database error', details: err });
        }
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

