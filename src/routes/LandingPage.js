import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import Portfolio from '../components/Porfolio';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const LandingPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <Services />
      <Portfolio />
      <Newsletter />
      <Footer />

    </React.Fragment>

  );
};

export default LandingPage;