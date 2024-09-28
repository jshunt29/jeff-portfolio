import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        // Fetch portfolio data from the backend
        axios.get('http://localhost:5000/portfolio')
            .then(res => setPortfolio(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <section>
            <h2>Portfolio</h2>
            <div>
                {portfolio.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
