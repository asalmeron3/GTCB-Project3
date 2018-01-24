import React, { Component } from 'react';
import Header from "./components/Header";
import Map from "./components/Map";
import Location from "./components/Location";
import Results from "./pages/Results";
import Auth from './pages/Auth';
import './App.css';

const auth = new Auth();

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
    );
  }
}

export default App;
