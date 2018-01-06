import * as React from 'react';

import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { RootState } from './redux';
import { AppRouter } from './app-router';
import { actions } from './redux/app';

import { History } from 'history';

// "rxjs" imports
import './rxjs-imports';

interface Props {
  store: Store<RootState>;
  history: History;
}

export class App extends React.Component<Props, {}> {

  componentDidMount() {
    const { store } = this.props;
    store.dispatch(actions.appStarted());
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
