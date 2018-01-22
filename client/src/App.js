import React, { Component } from 'react';
import Header from "./components/Header";
import Map from "./components/Map";
import Location from "./components/Location";
import MapGL from 'react-map-gl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Location />
      <MapGL
      width={700}
      height={450}
      latitude={37.768}
      longitude={-122.331}
      zoom={9.017}
      mapStyle="mapbox://styles/mapbox/dark-v9" 
      mapboxApiAccessToken={Your_Mapbox_Token}
     />
      
      </div>
    );
  }
}

export default App;
