import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Facebook from './pages/Facebook';
import Login from './pages/Login'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
                <Route exact path="/" component={Login}  />
                <Route exact path="/facebook" component={Facebook}  />
          </Switch>
  </BrowserRouter>,

document.getElementById('root'));