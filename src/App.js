import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import LogIn from './views/LogIn';
import SignUp from './views/SignUp';
import Boards from './views/Boards';
import Dashboard from './views/Dashboard';
import NotFound from './views/NotFound';

const App = () => (
  <Router>
    <div className="Site">
      <Header />
      <main className="Site__content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/app/:id" component={Dashboard} />
          <Route path="/app" component={Boards} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;
