import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Map from "./components/Map";
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        </Switch>
      <Header />
      <Map />
      
      </div>
    </Router>
    );
  }
}

export default App;
