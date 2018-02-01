//-------------- Imports ----------------------//
	import React from "react";
	import "./SignUp.css";
	import { Button, Modal,Grid, Form,Container,Message} from 'semantic-ui-react';

//--------------------------------------------//

//-------------- Sign-up Log-In MODAL with the form -----------------//
	var SignUp = props =>
		<Modal trigger={<Button content = "standard" size= 'massive'> Log In / Sign Up </Button>}>
		<Modal.Header> Login or Create an Account</Modal.Header>
		<Modal.Content>
		<Modal.Description>
		<Container>
		<Grid stackable >
		<Grid.Row verticalAlign='middle' vertstretched container>

			<Grid.Column mobile={15} tablet={8} computer={8} largeScreen={8} wideScreen={8}>
				<div className = "userLogin">
					<Form>
						<h3>Already have an account ? Sign in </h3>
						
						<Form.Field required>
							<label> Username: </label>
			                <Form.Input
			                  className = "form-control"
			                  placeholder = "Type Username Here"
			                  id = "loginEmail"
			                  type = "text"
			                  value = {props.sLemail}
			                  onChange = {props.handleUsernameChange}
			                />
			            </Form.Field>

			            <Form.Field required>
						    <label> Password: </label>
			                <Form.Input
			                  className = "form-control"
			                  placeholder = "Password123"
			                  id = "loginPassword"
			                  type = "password"
			                  value = {props.sLPassword}
			                  onChange = {props.handleLPasswordChange}
			                />
			            </Form.Field>
			            <Message
					      warning
					      header={props.msgHeader}
					      content={props.msgContent}
					    />

			            <Button type = "submit"
             				onClick = {props.handleLogin}
              				className = "btn btn-success"> 

              				Login 

              			</Button>
		            </Form>
				</div>
			</Grid.Column>
			

			<Grid.Column mobile={15} tablet={8} computer={8} largeScreen={8} wideScreen={8}>
				<div className = "signUp">
					<Form>
						<h3>No Account? Sign up with your email </h3>
						
						<Form.Field required>
			                <label> Name: </label>
				                <Form.Input
				                  className = "form-control"
				                  placeholder = "First-Name Last-Name"
				                  id = "userName"
				                  type = "text"
				                  value = {props.sname}
				                  onChange = {props.handleNameChange}
				                />
			            </Form.Field>

			            <Form.Field required>
						    <label> Email: </label>
				                <Form.Input
				                  className = "form-control"
				                  placeholder = "Type Email Here"
				                  id = "loginEmail"
				                  type = "email"
				                  value = {props.sSemail}
				                  onChange = {props.handleSEmailChange}
				                />
			            </Form.Field>

			            <Form.Field required>
			            	<label> Password: </label>
				                <Form.Input
				                  className = "form-control"
				                  placeholder = "Password123"
				                  id = "signupPassword"
				                  type = "password"
				                  value = {props.ssPwd1}
				                  onChange = {props.handlesPwd1}
				                />
			            </Form.Field>

						<Form.Field required>
							<label> Confirm Password: </label>
				                <Form.Input
				                  className = "form-control"
				                  placeholder = "Confirm-Password123"
				                  id = "passwordConfirmation"
				                  type = "password"
				                  value = {props.ssPwd2}
				                  onChange = {props.handlesPwd2}
				                />
			            </Form.Field>
			            <Message
					      
					      header={props.msgHeader}
					      content={props.msgContent}
					    />


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
		</Container>
	</Modal.Description>
	</Modal.Content>
	</Modal>


	export default SignUp;

