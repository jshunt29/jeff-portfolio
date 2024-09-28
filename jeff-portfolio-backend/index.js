const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
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

app.get('/portfolio', (req, res) => {
    db.query("SELECT * FROM portfolio", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get('/blog', (req, res) => {
    db.query("SELECT * FROM blog_posts", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
