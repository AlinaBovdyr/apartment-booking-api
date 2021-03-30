import React from 'react';
import Container from '../components/Containers/mainContainer';
import AptBar from '../components/AptBar';
import Title from '../components/UI/Title';

const ApartmentsView = () => {
    return (
        <Container>
            <AptBar />
            <Title title="Подборка согласно выбора" />
        </Container>
    );
};

export default ApartmentsView;