import React from 'react';

import '../assets/css/Login.css';

import NavBar from '../components/NavBar';
import OnBoardForm from '../components/OnBoardForm';

const LoginPage = () => {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main id="login-page">
        <OnBoardForm />

      </main>
    </React.Fragment>
  );
};

export default LoginPage;