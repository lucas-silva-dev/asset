import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Result from '../pages/Result';
import Error from '../pages/Error';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/result" exact component={Result} />
      <Route path="/error" exact component={Error} />
    </Switch>
  );
};

export default Routes;
