import { combineEpics, Epic } from 'redux-observable';
import { isActionOf } from 'typesafe-actions';
import { RootAction, RootState } from 'src/redux';
import { actions } from './';
import { Observable } from 'rxjs/Observable';

const sampleEpicTemplate: Epic<RootAction, RootState> = (action$, store) =>
  action$
    .filter(isActionOf(actions.loadAppDataRequest))
    .map((data) =>
      actions.loadAppDataSuccess('sample data'),
    ).catch((error) =>
      Observable.of(actions.loadAppDataError(error.message))
    );

export const epics = combineEpics(
  sampleEpicTemplate,
);