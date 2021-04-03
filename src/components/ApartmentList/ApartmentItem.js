import React from 'react';
import PropTypes from 'prop-types';
import s from './ApartmentList.module.css';

const ApartmentItem = ({imgSrc, price, rating, descr}) => {
    return (
        <li className={s.aptItem}>
            <img className={s.img} src={imgSrc} alt="Apartment" />
            <div className={s.overlay}>
                <p className={s.descr}>{descr}</p>
                <p className={s.rating}>{rating}</p>
                <p className={s.price}><b>UAH {price}</b> за ночь</p>
            </div>
        </li>
    );
};

ApartmentItem.propTypes = {
  descr: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imgSrc: PropTypes.string,
  price: PropTypes.number,
};

export default ApartmentItem;