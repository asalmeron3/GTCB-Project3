import React, { Component } from 'react';
import Header from "./components/Header";
import Map from "./components/Map";
import Location from "./components/Location";
import Results from "./pages/Results";
import Auth from './pages/Auth';
import './App.css';

const auth = new Auth();

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header
      login={auth.login()} />
      <div>
        <Location />
      </div>
      <div>
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
