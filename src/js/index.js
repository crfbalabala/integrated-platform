import React from 'react';
import routes from './routes.jsx';
import {Router} from 'react-router';

const Root = ({ history }) => (
  <Router history={history} routes={routes} />
);

export default Root;
