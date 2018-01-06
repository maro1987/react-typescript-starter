import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { getReturnOfExpression } from 'react-redux-typescript';

import { actions as appActions } from './app';

type ReactRouterAction = RouterAction | LocationChangeAction;

export const allActions = {
  ...appActions,
};

const returnOfActions =
  Object.values(allActions).map(getReturnOfExpression);
  
type AppAction = typeof returnOfActions[number];

export type RootAction =
  | ReactRouterAction
  | AppAction;