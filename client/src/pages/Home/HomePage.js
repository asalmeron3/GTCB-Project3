import React, { Component } from "react";
import Home from "../../components/Home";
import API from "../../utils/API";
import {Grid} from 'semantic-ui-react';


class HomePage extends Component {
	//Setting initial state
	state: {
		testing:""
	};
	render(){
		return (
			<div>
				<Home/>
			</div>
		)
	}
}

export default HomePage;