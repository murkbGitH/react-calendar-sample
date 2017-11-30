import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calendar from './Calendar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Calendar />, document.getElementById('calendar'));
registerServiceWorker();
