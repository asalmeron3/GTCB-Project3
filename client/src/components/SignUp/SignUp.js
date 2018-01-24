//-------------- Imports ----------------------//
	import React from "react";
	import "./SignUp.css";
	import { Button, Modal,Grid, Form} from 'semantic-ui-react';

//--------------------------------------------//

//-------------- Sign-up Log-In Div -----------------//
	var SignUp = props =>
		<Modal trigger={<Button content = "standard" size= 'massive'> Log In / Sign Up </Button>}>
		<Modal.Header> Login or Create an Account</Modal.Header>
		<Modal.Content>
		<Grid>
		<Grid.Row>

			<Grid.Column width={6}>
				<div className = "userLogin">
					<Form>
						<h3>Already have an account ? Sign in </h3>
						
						<Form.Field>
							<label> Email: </label>
			                <input
			                  className = "form-control"
			                  placeholder = "Type Email Here"
			                  id = "loginEmail"
			                  type = "text"
			                  value = {props.sLemail}
			                  onChange = {props.handleLEmailChange}
			                />
			            </Form.Field>

			            <Form.Field>
						    <label> Password: </label>
			                <input
			                  className = "form-control"
			                  placeholder = "Password123"
			                  id = "loginPassword"
			                  type = "text"
			                  value = {props.sLPassword}
			                  onChange = {props.handleLPasswordChange}
			                />
			            </Form.Field>

			            <Button type = "submit"
             				onClick = {props.handleLogin}
              				className = "btn btn-success"> 

              				Login 

              			</Button>
		            </Form>
				</div>
			</Grid.Column>

			<Grid.Column width={3}>
			</Grid.Column>
			

			<Grid.Column width={6}>
				<div className = "signUp">
					<Form>
						<h3>No Account? Sign up with your email </h3>
						
						<Form.Field>
			                <label> Name: </label>
				                <input
				                  className = "form-control"
				                  placeholder = "First-Name Last-Name"
				                  id = "userName"
				                  type = "text"
				                  value = {props.sname}
				                  onChange = {props.handleNameChange}
				                />
			            </Form.Field>

			            <Form.Field>
						    <label> Email: </label>
				                <input
				                  className = "form-control"
				                  placeholder = "Type Email Here"
				                  id = "loginEmail"
				                  type = "text"
				                  value = {props.sSemail}
				                  onChange = {props.handleSEmailChange}
				                />
			            </Form.Field>

			            <Form.Field>
			            	<label> Password: </label>
				                <input
				                  className = "form-control"
				                  placeholder = "Password123"
				                  id = "signupPassword"
				                  type = "text"
				                  value = {props.ssPwd1}
				                  onChange = {props.handlesPwd1}
				                />
			            </Form.Field>

						<Form.Field>
							<label> Confirm Password: </label>
				                <input
				                  className = "form-control"
				                  placeholder = "Confirm-Password123"
				                  id = "passwordConfirmation"
				                  type = "text"
				                  value = {props.ssPwd2}
				                  onChange = {props.handlesPwd2}
				                />
			            </Form.Field>


			            <Button  type = "submit"
              				onClick = {props.handleSignUp}
              				className = "btn btn-success">

              				Sign Up 

              			</Button>
		            </Form>
				</div>
			</Grid.Column>

		</Grid.Row>
	</Grid>
	</Modal.Content>
	</Modal>


	export default SignUp;

