import { combineReducers, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

import { actions } from './';

export type State = {
  readonly appStarted: boolean,
  readonly appData: string,
  readonly error: string | null,
};

const appStarted: Reducer<State['appStarted']> =
  (state = false, action) => {
    switch (action.type) {
      case getType(actions.appStarted):
        return true;

      default:
        return state;
    }
  };

const appData: Reducer<State['appData']> =
  (state = '', action) => {
    switch (action.type) {
      case getType(actions.loadAppDataSuccess):
        return action.payload;

      default:
        return state;
    }
  };

const error: Reducer<State['error']> =
  (state = null, action) => {
    switch (action.type) {
      case getType(actions.loadAppDataError):
        return action.payload;

      case getType(actions.loadAppDataRequest):
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