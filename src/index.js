
import { AppContainer as HotReloader } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import RedBox from 'redbox-react';

import { 
  HashRouter, 
  BrowserRouter, 
  Link, 
  Route, 
  Redirect, 
  Switch,
  withRouter, 
  Prompt 
} from 'react-router-dom';

const Main = () => (
  <h2>Main</h2>
)
const User = ({match}) => (
  <h2>{match.params.userID}</h2>
)
const PrimaryLayout = props => {
  return (
    <div className="primary-layout">
      <Link to='/'>main</Link> 
      <span>          </span>
      <Link to='/xxxxxxxxxx'>user</Link>
      <main>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:userID" exact component={User} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};


render(
  <HashRouter>
    <PrimaryLayout />
  </HashRouter>,
  document.getElementById('app')
);
