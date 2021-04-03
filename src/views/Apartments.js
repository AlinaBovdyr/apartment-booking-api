import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { aptOperations } from '../redux/apartments';
import Container from '../components/Containers/mainContainer';
import AptBar from '../components/AptBar';
import Title from '../components/UI/Title';
import ApartmentList from '../components/ApartmentList/ApartmentList';

const ApartmentsView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(aptOperations.fetchApartments());
    }, [dispatch]);


    return (
        <Container>
            <AptBar />
            <Title title="Подборка согласно выбора" />
            <ApartmentList />
        </Container>
    );
};

export default ApartmentsView;