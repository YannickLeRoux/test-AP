import React, { Component } from 'react';
import { Form, Text } from 'informed';

import axios from 'axios';
import qs from 'qs';


class OnBoardForm extends Component {
  state = {
    isSignUp: true,
    buttonText: "Sign Up",
    error: ''
  }

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  displayLogInForm() {
    this.setState({
      isSignUp: false,
      buttonText: "LOG IN",
      action: this.handleLogin.bind(this)

    })
  }

  displaySignUpForm() {
    this.setState({
      isSignUp: true,
      buttonText: "SIGN UP",
      action: this.handleSignUp.bind(this)
    })
  }

  handleSignUp() {
    const formState = this.formApi.getState();
    const { username, email, password } = formState.values;
    const data = { username, email, password };
    const url = 'http://dev3.apppartner.com/Reactors/scripts/user-signup.php';

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url,
    };

    axios(options)
    .then(response => {
      this.setState({ error: ''});
      alert(`Welcome ${response.data.user_username}! Successful Sign Up!`);

    })
    .catch(error => this.setState({
      error: error.response.data.message
    }));
  }


  handleLogin() {
    const formState = this.formApi.getState();
    const { email, password } = formState.values;
    const data = { email, password };
    const url = 'http://dev3.apppartner.com/Reactors/scripts/user-login.php';

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url,
    };

    axios(options)
      .then(response => {
          this.setState({ error: ''});
          alert(`Welcome back ${response.data.user_username}! Successful Log In !`);

      })
      .catch(error => this.setState({
        error: error.response.data.message
      }));

  }

  handleSubmit() {
    if (!this.state.isSignUp) {
      return this.handleLogin();
    }
    return this.handleSignUp();

  }

  render() {
    return (
      <Form
      getApi={this.setFormApi.bind(this)}
      id="onboard-form"
      onSubmit={ this.handleSubmit.bind(this) }>
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
          onClick={this.displayLogInForm.bind(this)}>
          LOGIN
        </h3>
      </div>
        <div className="error-message">{this.state.error}</div>
        {this.state.isSignUp && <Text type="text" field="username" id="onboard-username" placeholder="Username" onChange={() => this.setState({error:''})} />}
        <Text type="email" field="email" id="onboard-email" placeholder="Email" onChange={() => this.setState({error:''})} />
        <Text type="password" field="password" id="onboard-password" placeholder="Password" onChange={ () => this.setState({error:''}) } />
        <button type="submit">{ this.state.buttonText }</button>
      </Form>
    );
  }
}

export default OnBoardForm;