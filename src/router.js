import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import PupsPage from './routes/PupsPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/pups" component={PupsPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
