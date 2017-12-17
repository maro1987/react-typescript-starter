import { combineReducers } from 'redux';

import {
  APP_STARTED,
} from './';

export type State = {
  readonly appStarted: boolean,
};

export const reducer = combineReducers<State>({
  appStarted: (state = false, action) => {
    switch (action.type) {
      case APP_STARTED:
        return true;

      default:
        return false;
    }
  },
});