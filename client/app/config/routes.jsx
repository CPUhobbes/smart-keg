import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './../components/common/Header';
import Main from '../components/Main';
import Settings from './../components/Settings';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="smart-keg">
        <Route component={Header} />
        <Route exact path="/" component={Main} />
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Root;
