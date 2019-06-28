import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CostPage from './routes/Cost/CostPage';
import UPage from './routes/Umoney/UPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/cost" exact component={CostPage} />
        <Route path="/umoney" exact component={UPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
