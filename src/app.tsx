import * as React from 'react';

import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { RootState } from './redux';
import { AppRouter } from './app-router';
import { appActionCreators } from './redux/app';

import { History } from 'history';

interface Props {
  store: Store<RootState>;
  history: History;
}

export class App extends React.Component<Props, {}> {

  componentDidMount() {
    const { store } = this.props;
    store.dispatch(appActionCreators.appStarted());
  }

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
            <AppRouter />
        </Router>
      </Provider>
    );
  }
}
