import React , { Component } from 'react';
import Facebook from './pages/Facebook';
import Login from './pages/Login'
import {
  HashRouter ,
  Route,
  Link,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Link to="/"></Link>
          <Link to="/app" ></Link>
          <Route exact path="/" component={Login} />
          <Route exact path="/app" component={Facebook} />
        </div>
      </HashRouter>
    );
  }
}


export default App;