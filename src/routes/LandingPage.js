import React from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import Portfolio from '../components/Porfolio';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Locations from '../components/Locations';

const LandingPage = () => {
  return (
    <React.Fragment>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <Services />
        <Portfolio />
        <Locations />
        <Newsletter />
      </main>
      <Footer />

    </React.Fragment>

  );
};

export default LandingPage;