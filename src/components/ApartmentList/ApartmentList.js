import React from 'react';
import ApartmentItem from './ApartmentItem';
import Title from '../UI/Title';

const ApartmentList = ({apartments}) => {
    return (
        <>
            <Title title="Подборка согласно выбора" />
            <ul>
                {apartments.map(({ id, imgUrl, price, rating, descr }) => (
                    <ApartmentItem
                        key={id}
                        imgSrc={imgUrl}
                        price={price}
                        rating={rating}
                    />
                ))}   
            </ul>
        </>
    );
};

export default ApartmentList;