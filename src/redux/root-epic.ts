import { combineEpics } from 'redux-observable';

import { epics as toasts } from './app';

export const rootEpic = combineEpics(
  toasts,
);