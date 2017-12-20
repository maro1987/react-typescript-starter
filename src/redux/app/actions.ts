import {
  APP_STARTED,
  LOAD_APP_DATA_REQUEST,
  LOAD_APP_DATA_SUCCESS,
  LOAD_APP_DATA_ERROR,
} from './types';

export type Actions = {
  APP_STARTED: {
    type: typeof APP_STARTED,
  },
  LOAD_APP_DATA_REQUEST: {
    type: typeof LOAD_APP_DATA_REQUEST,
  },
  LOAD_APP_DATA_SUCCESS: {
    type: typeof LOAD_APP_DATA_SUCCESS,
    payload: string,
  },
  LOAD_APP_DATA_ERROR: {
    type: typeof LOAD_APP_DATA_ERROR,
    payload: string,
  }
};

// Action Creators
export const appActionCreators = {
  appStarted: (): Actions[typeof APP_STARTED] => ({
    type: APP_STARTED,
  }),
  loadAppDataRequest: (): Actions[typeof LOAD_APP_DATA_REQUEST] => ({
    type: LOAD_APP_DATA_REQUEST,
  }),
  loadAppDataSuccess: (payload: string): Actions[typeof LOAD_APP_DATA_SUCCESS] => ({
    type: LOAD_APP_DATA_SUCCESS,
    payload,
  }),
  loadAppDataError: (payload: string): Actions[typeof LOAD_APP_DATA_ERROR] => ({
    type: LOAD_APP_DATA_ERROR,
    payload,
  }),
};