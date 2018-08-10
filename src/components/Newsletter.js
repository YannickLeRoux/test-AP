import React, { Component } from 'react';
import { Form, Text } from 'informed';
import axios from 'axios';
import qs from 'qs';

import '../assets/css/Newsletter.css';

class Newsletter extends Component {

  setFormApi(formApi) {
    this.formApi = formApi;
  }

  newsletterSubscribe() {
    const formState = this.formApi.getState();
    const data = { email : formState.values.email };
    const url = 'http://dev3.apppartner.com/Reactors/scripts/add-email.php';

    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(data),
      url,
    };

    axios(options)
      .then(response => console.log(response));
  }


  render() {
    return (
      <div className="newsletter">
        <h2>Subscribe to newsletter</h2>

        <Form
          getApi={this.setFormApi.bind(this)}
          onSubmit={this.newsletterSubscribe.bind(this)}
          id="newsletter-form">
          <Text
          className="newsletter-input"
          field="email"
          id="newsletter-email"
          placeholder="Your Email"
        />
          <button
          className="newsletter-button"
          type="submit">
            Subscribe
        </button>
        </Form>
      </div>

    );

  }

};

export default Newsletter;