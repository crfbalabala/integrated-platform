
import { AppContainer as HotReloader } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import RedBox from 'redbox-react';
import { HashRouter, BrowserRouter, Link, Route, Redirect, Switch, withRouter, Prompt } from 'react-router-dom';

import { LoginView } from './containers';


import 'styles/normalize.scss'
import 'styles/antd.css'
import 'styles/login-view.scss'


const PrimaryLayout = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LoginView} />
        <Route path="/:userID" exact component={LoginView} />
        <Route path="/login" exact component={LoginView} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};


render(
  <HashRouter>
    <PrimaryLayout />
  </HashRouter>,
  document.getElementById('app')
);
