import React from 'react';
import { Form, Text } from 'informed';

import '../assets/css/Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to newsletter</h2>

      <Form id="newsletter-form">
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

};

export default Newsletter;