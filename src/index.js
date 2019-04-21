import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { production } from './config';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (!production) {
  registerServiceWorker();
}
