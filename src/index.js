import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <HashRouter hashType='noslash'>
      <App />
    </HashRouter>
  ), document.getElementById('root'))
registerServiceWorker();
