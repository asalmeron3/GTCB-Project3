//-------------- Imports ----------------------//
	import React from "react"
	import "./Home.css"
	import { Image,Button } from 'semantic-ui-react'
	import imgGVR from "./GovRep.png"
	import Login from "../../pages/Login";
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var home = props =>
		<div className = "wrapper">
			<div className = "imgDiv">
				<Image src={imgGVR} className="myImage" />
				
			</div>

			<div className = "buttonDiv">
			
				<Login/>		

			</div>
		
		</div>
	export default home;