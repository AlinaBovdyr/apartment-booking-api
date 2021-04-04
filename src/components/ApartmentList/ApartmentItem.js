import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './ApartmentList.scss';
import './DescrAppear.css'

const ApartmentItem = ({ imgSrc, price, rating, descr }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(prevState => !prevState);
    }

    return (
        <li className="aptItem" onClick={handleClick}>
            <img className="img" src={imgSrc} alt="Apartment" />
            <CSSTransition
                in={isVisible}
                unmountOnExit
                classNames="appear"
                timeout={250}
            >
                <div className="overlay">
                    <p className="descr">{descr}</p>
                    <p className="rating">{rating}</p>
                    <p className="price"><b>UAH {price}</b> за ночь</p>
                </div>
            </CSSTransition>
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