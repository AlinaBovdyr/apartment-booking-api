import React from 'react';
import PropTypes from 'prop-types';

const ApartmentItem = ({imgUrl, price, rating, descr}) => {
    return (
        <li>
            <img src={imgUrl} alt="Apartment" />
            <div>
                <p>{descr}</p>
                <p>{rating}</p>
                <p>UAH {price} за ночь</p>
            </div>
        </li>
    );
};

ApartmentItem.propTypes = {
  descr: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.string,
};

export default ApartmentItem;