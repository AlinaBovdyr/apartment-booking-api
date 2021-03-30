import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer';
import s from './Containers.module.css';

const AuthContainer = ({title, children}) => {
    return (
        <>
           <section className={s.section}>
                <div className={s.container}>
                    <h2 className={s.title}>{title}</h2>
                    {children}
                </div>
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