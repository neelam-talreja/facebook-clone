import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Facebook from './components/Facebook';
import Login from './components/Login'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
          <Switch>
                <Route exact path="/facebook" component={Facebook}  />
                <Route path="/" component={Login}  />
          </Switch>
  </BrowserRouter>,

document.getElementById('root'));