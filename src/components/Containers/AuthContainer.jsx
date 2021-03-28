import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '../AppBar/AppBar';
import s from './AuthContainer.module.css';

const AuthContainer = ({title, children}) => {
    return (
        <>
            <AppBar />
            <section className={s.section}>
            <div className={s.container}>
                <h2 className={s.title}>{title}</h2>
                {children}
            </div>
            </section>
        </>
    );
};

AuthContainer.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default AuthContainer;