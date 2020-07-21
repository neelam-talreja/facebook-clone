import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import pieChart from './components/pieChart.js'
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
          {/* All children of a <Switch> should be <Route> or <Redirect> elements. */}
          <Switch>
                <Route path="/" component={pieChart} exact />
          </Switch>
  </BrowserRouter>,
document.getElementById('root'));