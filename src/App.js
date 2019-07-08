import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNav from './components/C_MainNav';
import HomePage from './components/C_HomePage';
import About from './components/C_AboutPage';
import Contact from './components/C_ContactPage';
import Topics from './components/C_TopicPage';

import './App.css';

// Component

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <Route
          path="/"
          exact
          render={routeProps => <HomePage name="RJ" {...routeProps} />}
        />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/topics" component={Topics} />

      </div>
    </Router>
  );
}

export default App;
