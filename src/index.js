import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pieChart from './components/pieChart.js'
import Iframe_pie from './components/iframe.js'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
          <Switch>
                <Route path="/pie-chart" component={pieChart}  />
                <Route path="/" component={Iframe_pie}  />
          </Switch>
  </BrowserRouter>,
  
document.getElementById('root'));