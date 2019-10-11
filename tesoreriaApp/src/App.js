import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap';

// COMPONENTES
import Login from './Login';
import Home from './Home';
import { withCookies } from "react-cookie";
import {connect} from 'react-redux';

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route path = "/home" component = {Home} />
          </Switch>
      </BrowserRouter>
    );
  }

}

export default withCookies(connect()(App));