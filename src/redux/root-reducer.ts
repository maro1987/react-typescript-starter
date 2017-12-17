import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

import { reducer as app, State as AppState } from './app';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  router: RouterState;
  app: AppState;
}

export const rootReducer = combineReducers<RootState>({
  router,
  app,
});