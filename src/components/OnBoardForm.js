import React, { Component } from 'react';
import { Form, Text } from 'informed';


class OnBoardForm extends Component {
  state = {
    isSignUp: true,
    buttonText: "Sign Up"
  }

  displaySignInForm() {
    this.setState({
      isSignUp: false,
      buttonText: "LOG IN"
    })
  }

  displaySignUpForm() {
    this.setState({
      isSignUp: true,
      buttonText: "SIGN UP"
    })
  }

  render() {
    return (
      <Form id="onboard-form">
      <div className="onboard-menu">
        <h3
          className="onboard-menu-item"
          style={{textDecoration: this.state.isSignUp && 'underline'}}
          onClick={this.displaySignUpForm.bind(this)}>
          SIGN UP
        </h3>
        <h3
          className="onboard-menu-item"
          style={{textDecoration: !this.state.isSignUp && 'underline'}}
          onClick={this.displaySignInForm.bind(this)}>
          LOGIN
        </h3>
      </div>
        {this.state.isSignUp && <Text field="username" id="onboard-username" placeholder="Username"/>}
        <Text field="email" id="onboard-email" placeholder="Email" />
        <Text field="password" id="onboard-password" placeholder="Password" />
        <button type="submit">{ this.state.buttonText }</button>
      </Form>
    );
  }
}

export default OnBoardForm;