import React, { Component } from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import Home from "./pages/Home";
// import Map from "./components/Map";
import Location from "./components/Location";
import MapGL from 'react-map-gl';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <Switch>
        <Route exact path = "/login" component = {Login} />;
        <Route exact path = "/UserPage" component = {UserPage} />;
        <Route exact path = "/Home" component = {Home} />;
        </Switch>
        <Location />
        <MapGL
        width={700}
        height={450}
        latitude={37.768}
        longitude={-122.331}
        zoom={9.017}
        // mapStyle="mapbox://styles/mapbox/dark-v9" 
        // mapboxApiAccessToken={Your_Mapbox_Token}
       />
        
        </div>
      </Router>
    );
  }
}

export default App;
