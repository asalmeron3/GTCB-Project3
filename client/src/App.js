import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Tab } from 'semantic-ui-react'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
        <Route exact path = "/UserPage" component = {UserPage} />;
        <Route exact path = "/" component = {Home} />;
        <Route exact path = "/Landing" component = {LandingPage} />;
        </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
