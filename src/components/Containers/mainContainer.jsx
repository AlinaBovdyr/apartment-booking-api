import React from 'react';
import Footer from '../Footer';
import s from './Containers.module.css';

const mainContainer = ({children}) => {
    return (
        <>
            <div className={s.mainContainer}>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default mainContainer;