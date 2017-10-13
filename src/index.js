// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {App} from './app';

const root = document.getElementById('root');

if (root) {
    ReactDOM.render(<App />, root);
}
registerServiceWorker();
