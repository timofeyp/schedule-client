/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Schedule from 'containers/Schedule/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Layout from 'containers/Layout';

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <div className="theme-light">
      <div className="wrapper">
        <Layout />
        <Switch>
          <Route exact path="/" component={Schedule} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}
