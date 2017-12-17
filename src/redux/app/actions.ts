export const APP_STARTED = 'APP_STARTED';

export type Actions = {
  APP_STARTED: {
    type: typeof APP_STARTED,
  }
};

// Action Creators
export const appActionCreators = {
  appStarted: (): Actions[typeof APP_STARTED] => ({
    type: APP_STARTED,
  }),
};