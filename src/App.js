import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

// Component
const Index = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>
const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>Home Page</Link>
            </li>
            <li>
              <Link to='/about'>About Page</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Page</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
