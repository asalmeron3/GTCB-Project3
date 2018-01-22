//-------------- Imports ----------------------//
	import React from "react"
	import "./SignUp.css"
//--------------------------------------------//

//-------------- Sign-up Log-In Div -----------------//
	var SignUp = props =>
		<div className = "signUpArea">

			<div className = "userLogin">
				<div className = "title"><h2>Already have an account ? Sign in </h2></div>
				<form className = "loginForm">
					<div className = "form-group">
						<label> Email: </label>
						<input
							className = "form-control"
							placeholder = "Type Email Here"
							id = "loginEmail"
							type = "text"
							value = {props.sLemail}
							onChange = {props.handleLEmailChange}
						/>
						<label> Password: </label>
						<input
							className = "form-control"
							placeholder = "Password123"
							id = "loginPassword"
							type = "text"
							value = {props.sLPassword}
							onChange = {props.handleLPasswordChange}
						/>
						<button
							type = "submit"
							onClick = {props.handleLogin}
							className = "btn btn-success"
						> Login </button>
					</div>
				</form>
			</div>

			<div className = "signUp">
				<div className = "title"><h2>No account? Sign up with your email</h2></div>
				<form className = "signForm">
					<div className = "form-group">
						<label> Name: </label>
						<input
							className = "form-control"
							placeholder = "First-Name Last-Name"
							id = "userName"
							type = "text"
							value = {props.sname}
							onChange = {props.handleNameChange}
						/> 
						<label> Email: </label>
						<input
							className = "form-control"
							placeholder = "Type Email Here"
							id = "loginEmail"
							type = "text"
							value = {props.sSemail}
							onChange = {props.handleSEmailChange}
						/>
						<label> Password: </label>
						<input
							className = "form-control"
							placeholder = "Password123"
							id = "signupPassword"
							type = "text"
							value = {props.ssPwd1}
							onChange = {props.handlesPwd1}
						/>
						<label> Confirm Password: </label>
						<input
							className = "form-control"
							placeholder = "Confirm-Password123"
							id = "passwordConfirmation"
							type = "text"
							value = {props.ssPwd2}
							onChange = {props.handlesPwd2}
						/>
						<button
							type = "submit"
							onClick = {props.handleSignUp}
							className = "btn btn-success"
						> Login </button>
					</div>
				</form>
			</div>
		</div>

	export default SignUp;

