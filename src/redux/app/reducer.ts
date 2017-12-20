import { combineReducers, Reducer } from 'redux';

import {
  APP_STARTED,
  LOAD_APP_DATA_REQUEST,
  LOAD_APP_DATA_SUCCESS,
  LOAD_APP_DATA_ERROR,
} from './types';

export type State = {
  readonly appStarted: boolean,
  readonly appData: string,
  readonly error: string | null,
};

const appStarted: Reducer<State['appStarted']> =
  (state = false, action) => {
    switch (action.type) {
      case APP_STARTED:
        return true;

      default:
        return state;
    }
  };

const appData: Reducer<State['appData']> =
  (state = '', action) => {
    switch (action.type) {
      case LOAD_APP_DATA_SUCCESS:
        return action.payload;

      default:
        return state;
    }
  };

const error: Reducer<State['error']> =
  (state = null, action) => {
    switch (action.type) {
      case LOAD_APP_DATA_ERROR:
        return action.payload;

      case LOAD_APP_DATA_REQUEST:
        return null;

      default:
        return state;
    }
  };

export const reducer = combineReducers<State>({
  appStarted,
  appData,
  error,
});