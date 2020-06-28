import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import News from './components/pages/News';
import NewsItem from './components/pages/NewsItem';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <h1 className="App__Title">ReactSnapshot</h1>

        <nav className="App__Nav">
          <Link to="/" className="App__NavLink">Home</Link>
          <Link to="/about" className="App__NavLink">About</Link>
          <Link to="/news" className="App__NavLink">News</Link>
        </nav>

        <div className="App__Body">
          <Switch>
            <Route path="/news/:slug"><NewsItem /></Route>
            <Route path="/news"><News /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
