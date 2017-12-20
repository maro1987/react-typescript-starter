import { combineEpics, Epic } from 'redux-observable';
import { RootAction, RootState } from 'src/redux';
import { AppActionTypes, appActionCreators } from './';
import { Observable } from 'rxjs';
export { Observable };

const sampleEpicTemplate: Epic<RootAction, RootState> = (action$, store) =>
  action$.ofType(
    AppActionTypes.LOAD_APP_DATA_REQUEST
  ).map((data) =>
    appActionCreators.loadAppDataSuccess('sample data')
    ).catch((error) =>
      Observable.of(appActionCreators.loadAppDataError(error.message))
    );

export const epics = combineEpics(
  sampleEpicTemplate,
);