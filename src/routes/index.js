import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Me from '../pages/Me';

export default () => (
  <Switch>
    <Route path="/me" component={Me} />
    <Route path="/message" component={Home} />
  </Switch>
);