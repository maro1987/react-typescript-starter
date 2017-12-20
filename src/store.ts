import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
// import { default as thunkMiddleware } from 'redux-thunk';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import { rootReducer, rootEpic, RootState } from './redux';

const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export const epicMiddleware = createEpicMiddleware(rootEpic);
export const browserHistory = createBrowserHistory();
export const routerMiddleware = createRouterMiddleware(browserHistory);

export function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    // thunkMiddleware,
    epicMiddleware,
    routerMiddleware,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );
  // create store
  return createStore<RootState>(
    rootReducer,
    initialState!,
    enhancer,
  );
}

export const store = configureStore();
