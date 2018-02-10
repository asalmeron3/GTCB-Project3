import React, { Component } from 'react';
import API from "../../utils/API";
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
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>

        <div>
          <h2>Find out who represents you in Congress and what bills they have sponsored !</h2>
          <h3>Enter your address below. We will find your congressional district.</h3>
          <br/>
        </div>

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