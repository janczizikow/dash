import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';

const App = () => (
  <Router>
    <div className="site">
      <Header />
      <main className="site__content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={About} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
