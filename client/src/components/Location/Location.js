import React, { Component } from 'react';
import API from "../../utils/API";
import axios from 'axios';
import './Location.css';


class Location extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log(this.state.value);
      event.preventDefault();
      const newLocal = API.updateAddress(this.state.value);
      axios.post('api/auth/location', this.state.value)
      .then((response) => {
        //console.log(response);
        localStorage.getItem('jwtToken', response.data.token);
        //localStorage.getItem(this.state.username);
        window.location.replace('/UserPage');
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div className="ui action input">
          <label>
            Address: 
            <input type="text" placeholder="Ex. 123 Pine Street, Atlanta, GA 30303..." value={this.state.value} onChange={this.handleChange} />
          </label>
          <button className="ui icon button">
            <i aria-hidden="true" className="search icon"></i>
          </button>
        </div>
        </form>
      );
    }
  }

  export default Location;