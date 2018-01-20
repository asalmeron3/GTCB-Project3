import React, { Component } from 'react';
import Header from "./components/Header";
import Map from "./components/Map";
import Location from "./components/Location";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Location />
      <Map />
      
      </div>
    );
  }
}

export default App;
