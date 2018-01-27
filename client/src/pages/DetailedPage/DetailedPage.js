import React, { Component } from "react";
import Dashboard from "../../components/Dashboard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import {Grid} from 'semantic-ui-react';


class DetailedPage extends Component{

	// constructor(props) {

	// 	this.state = {

	// 	};
	// }

	// ComponentDidMount(){
	// 	axios.get('https://api.propublica.org/congress/v1/115/senate/members.json')
	// 	. then(({data}) => {
	// 		this.setState({

	// 		});
	// 	})
	// 	.catch((err) => {})
	// }
	render(){
		return(
		<div>
			<Header/>
			<Dashboard/>

			<Footer/>

		</div>
		)

	}
}

export default DetailedPage;