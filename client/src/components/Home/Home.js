//-------------- Imports ----------------------//
	import React from "react"
	import "./Home.css"
	import { Image } from 'semantic-ui-react'
	import imgGVR from "./GoVoRep.png"
//--------------------------------------------//

//-------------- UserPageRepCard Div -----------------//
	var home = props =>
		<div className = "Home">
			<Image src={imgGVR} />			

		</div>
	export default home;