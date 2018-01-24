import React, { Component } from 'react';
import Header from "./components/Header";
import Map from "./components/Map";
import Location from "./components/Location";
import Results from "./pages/Results";
import Auth from './pages/Auth';
import './App.css';

const auth = new Auth();
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Tab } from 'semantic-ui-react';

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    return (

      <div className="App">
      <Header />
      <div>
        <Location />
      </div>
      <div >
      <Map />
      </div>
      <div className="hidden">
      <Results />
      </div>
      </div>

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
