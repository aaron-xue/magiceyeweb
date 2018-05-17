import React from 'react'
import { Router, Route, IndexRoute,hashHistory } from 'react-router'
import App from './containers/App/index';
import Home from './containers/home/index';

export default () => (
    <Router history = {hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home}/>
        </Route>
    </Router>
)