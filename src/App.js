import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from './components/C_HomePage';

import './App.css';

// Component

const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const Topic = ({ match }) => <h3> Requested Param: {match.params.id} </h3>;
const Topics = ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
      </nav>
      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please Select a topic.</h3>}
      />
    </div>
  );
}

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
            <li>
              <Link to='/topics'>Topics Page</Link>
            </li>
          </ul>
        </nav>
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
