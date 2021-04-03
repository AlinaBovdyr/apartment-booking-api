import React from 'react';
import { useSelector } from 'react-redux';
import {aptSelectors} from '../../redux/apartments'
import ApartmentItem from './ApartmentItem';
import s from './ApartmentList.module.css';

const ApartmentList = () => {
    const apartments = useSelector(aptSelectors.getApartments);

    return (
        <ul className={s.aptList}>
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