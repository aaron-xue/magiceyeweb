import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker';
import './reset.css'
import './style.css'

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
