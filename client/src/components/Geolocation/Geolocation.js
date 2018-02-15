import React, { Component } from 'react';
import Reverse from 'reverse-geocode';


class Geolocation extends Component {

    state = {
        longitude: "",
        latitude: ""
    }

    getGeo = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
        this.setState({latitude:position.coords.latitude, longitude:position.coords.longitude});
        console.log(longitude, latitude);
     });
    }

    render(){
        return ();
    }

}

export default Geolocation;