import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './components/Home';
import Form from './components/Form';

function Calculator() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
        <Navigation />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
