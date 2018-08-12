import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/Card.css';

const Card = ({ image, title, description }) => {
  return (
    <React.Fragment>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-description">
        <h4 className="card-description-heading">{title}</h4>
        <div className="card-description-content">
          {description}
        </div>
      </div>
    </React.Fragment>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
