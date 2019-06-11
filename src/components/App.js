import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import { withSession } from '../containers/auth/withSession';
import Callback from '../containers/auth/Callback';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withSession(Home)} />
        <Route exact path="/callback" component={Callback} />
      </Switch>
    </Router>
  );
}
