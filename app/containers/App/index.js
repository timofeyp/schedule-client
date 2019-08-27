/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Schedule from 'containers/Schedule/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Auth from 'containers/Auth';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from 'containers/App/session/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import saga from 'containers/App/session/saga';
import Layout from 'containers/Layout';
import { connect } from 'react-redux';
import { fetchSessionRoutine } from 'containers/App/session/constants';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.css';
import { createStructuredSelector } from 'reselect';

const App = ({ fetchSession }) => {
  useInjectReducer({ key: 'session', reducer });
  useInjectSaga({ key: 'session', saga });
  useEffect(() => {
    fetchSession();
  }, []);
  return (
    <div className="theme-light">
      <div className="wrapper">
        <Layout />
        <Switch>
          <Route exact path="/" component={Schedule} />
          <Route path="/auth" component={Auth} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
};

App.propTypes = {
  fetchSession: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  fetchSession: () => fetchSessionRoutine.trigger(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
