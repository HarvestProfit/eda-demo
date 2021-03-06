import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Calculator from './routes/Calculator';
import Home from './routes/Home';
import Form from './routes/Form';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/eda-demo">
        <div className="d-flex flex-column justify-content-between" style={{ minHeight: '100vh' }}>
          <Navigation />
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
      </BrowserRouter>
    );
  }
}

export default App;
