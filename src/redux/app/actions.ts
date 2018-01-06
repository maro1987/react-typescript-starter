import { createAction } from 'typesafe-actions';

const APP_STARTED = '@app/APP_STARTED';
const LOAD_APP_DATA_REQUEST = '@app/LOAD_APP_DATA_REQUEST';
const LOAD_APP_DATA_SUCCESS = '@app/LOAD_APP_DATA_SUCCESS';
const LOAD_APP_DATA_ERROR = '@app/LOAD_APP_DATA_ERROR';

// Action Creators
export const actions = {
  appStarted: createAction(APP_STARTED),
  loadAppDataRequest: createAction(LOAD_APP_DATA_REQUEST),
  loadAppDataSuccess: createAction(LOAD_APP_DATA_SUCCESS, (payload: string) => ({
    type: LOAD_APP_DATA_SUCCESS,
    payload,
  })),
  loadAppDataError: createAction(LOAD_APP_DATA_ERROR, (payload: string) => ({
    type: LOAD_APP_DATA_ERROR,
    payload,
  })),
};
