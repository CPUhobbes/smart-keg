import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './../components/common/Header';
import Home from './../components/home/Home';
import Child from './../components/child/Child';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="smart-keg">
        <Route component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/child" component={Child} />
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
};

export default Root;
