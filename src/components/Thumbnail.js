import React from 'react';
import PropTypes from 'prop-types';


const Thumbnail = ({ className, image, title, address }) => {
  return (
    <React.Fragment>
      <figure className={className}>
        <img src={image} alt="locations images" className="thumbnail-image" />
        <figcaption>
          <h5>{title}</h5>
          <div className="caption">{address}</div>
        </figcaption>
      </figure>
    </React.Fragment>
  );
};

Thumbnail.propTypes = {
  className: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};


export default Thumbnail;
