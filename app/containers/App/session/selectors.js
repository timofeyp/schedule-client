import { createSelector } from 'reselect';
import initialState from 'containers/App/session/reducer';

const selectRouter = state => state.session || initialState;

const makeSelectIsLoggedIn = () =>
  createSelector(
    selectRouter,
    sessionState => sessionState.auth,
  );

const makeSelectUser = () =>
  createSelector(
    selectRouter,
    sessionState => sessionState.user,
  );

export { makeSelectIsLoggedIn, makeSelectUser };
