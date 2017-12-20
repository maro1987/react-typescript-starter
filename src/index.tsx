import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import { store, browserHistory } from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// "rxjs" imports
import './rxjs-imports';

ReactDOM.render(
  <App store={store} history={browserHistory} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
