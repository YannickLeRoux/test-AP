import React from 'react';

import Banner from '../assets/img/banner.png';

import '../assets/css/Banner.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <img src={Banner} className="banner-img" alt="banner"/>
        <h1>Hello, welcome to Reactor</h1>
      </div>
    </React.Fragment >
  );
};

export default Header;

