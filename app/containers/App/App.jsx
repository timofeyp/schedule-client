import React, { Fragment } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <Fragment>
          <div>
            <Router />
          </div>
        </Fragment>
      </ScrollToTop>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(App);
