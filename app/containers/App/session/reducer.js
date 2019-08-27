import {
  setAuthRoutine,
  fetchSessionRoutine,
} from 'containers/App/session/constants';
import produce from 'immer/dist/immer';

export const initialState = {
  profile: {},
  auth: false,
};

/* eslint-disable default-case, no-param-reassign */
const sessionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case setAuthRoutine.SUCCESS:
        draft.profile = action.payload;
        break;
    }
    switch (action.type) {
      case fetchSessionRoutine.SUCCESS:
        draft.profile = action.payload;
        break;
    }
  });

export default sessionReducer;
