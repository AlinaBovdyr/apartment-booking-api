import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import s from './Containers.module.css';

const AuthContainer = ({children}) => {
    return (
        <>
           <section className={s.section}>
                {children}
            </section>
            <Footer/>
        </>
    );
};

AuthContainer.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default AuthContainer;