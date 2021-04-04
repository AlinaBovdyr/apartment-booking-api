import React from 'react';
import { useSelector } from 'react-redux';
import {aptSelectors} from '../../redux/apartments'
import ApartmentItem from './ApartmentItem';
import './ApartmentList.scss';

const ApartmentList = () => {
    const apartments = useSelector(aptSelectors.getApartments);

    return (
        <ul className="aptList">
            {apartments.map(({ id, imgUrl, price, rating, descr }) => (
                <ApartmentItem
                    key={id}
                    imgSrc={imgUrl}
                    price={price}
                    rating={rating}
                    descr={descr}
                />
            ))}   
        </ul>
    );
};

export default ApartmentList;