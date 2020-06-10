import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from '../src/pages/index';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Index} />
        </Switch>
      </div>
    <Index />
  </Router>
  );
}

export default App;
