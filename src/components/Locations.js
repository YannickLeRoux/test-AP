import React from 'react';
import Thumbnail from './Thumbnail';

import image3 from '../assets/img/3.png';
import image4 from '../assets/img/4.png';
import image5 from '../assets/img/5.png';
import image6 from '../assets/img/6.png';

import '../assets/css/Locations.css';

const Locations = () => {
  return (
    <section id="locations">
      <h3 className="locations-heading">Maui By Air The Best Way Around The Island</h3>
      <Thumbnail image={image3} className="thumbnail" title="East Josianefurt" address="085 Daron Via" />
      <Thumbnail image={image4} className="thumbnail" title="South Cristopherport" address="162 Chandler Ville" />
      <Thumbnail image={image5} className="thumbnail" title="Concepcionbury" address="7643 Kylie Burgs" />
      <Thumbnail image={image6} className="thumbnail" title="Reychester" address="5590 Gabe Views Apt. 044" />

    </section>
  );
};

export default Locations;
