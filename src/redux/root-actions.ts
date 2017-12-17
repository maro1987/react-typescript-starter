import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { Actions as AppActions } from 'src/redux/app';

type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction =
  | ReactRouterAction
  | AppActions[keyof AppActions];