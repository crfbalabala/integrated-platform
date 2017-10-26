
import { AppContainer as HotReloader } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import RedBox from 'redbox-react';
import { HashRouter, BrowserRouter, Link, Route, Redirect, Switch, withRouter, Prompt } from 'react-router-dom';

import { LoginView, HomeView } from './containers';


import 'styles/normalize.scss'
import 'styles/antd.css'
import 'styles/rewriteAntd.scss'
import 'styles/login-view.scss'


global.CONFIGS  = require('./config');
global.CRFFETCH = require('./utils/fetch/index.es6');


const PrimaryLayout = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomeView} />
        <Route path="/login" exact component={LoginView} />
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
