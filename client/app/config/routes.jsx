import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './../components/common/Header';
import Main from '../components/Main';
import Settings from './../components/settings/Settings';
import Login from './../components/settings/Login';
import ErrorPage from './../components/common/ErrorPage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="smart-keg">
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/settings" component={Settings} />
          <Route path="/login" component={Login} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Root;
