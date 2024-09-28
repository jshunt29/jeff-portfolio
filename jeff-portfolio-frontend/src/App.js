import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import About from './components/About';
import BioPage from './components/BioPage';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import './App.css';

function App() {
  const backgroundStyle = {
    backgroundImage: `url('/images/background.jpeg')`,  // This assumes the image is in public/images
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    width: '100%',
  };

  return (
    <Router>
      <div style={backgroundStyle} className="app-layout">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/bio" component={BioPage} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
