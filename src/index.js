import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import CreatePage from './CreatePage'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

render(
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/create' component={CreatePage} />
            <Route path="*" render={() => <h2>404 Error. Page not found</h2>} />
        </Switch>
    </Router>,  document.getElementById('root')
);
registerServiceWorker();