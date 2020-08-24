import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../../views/about';
import Home from '../../views/home';
import Media from '../../views/media';
import News from '../../views/news';

const Routes = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/media">
      <Media />
    </Route>
    <Route path="/news">
      <News />
    </Route>
    <Route path="/">
      <Redirect to="/home" />
    </Route>
  </Switch>
);

export default Routes;
