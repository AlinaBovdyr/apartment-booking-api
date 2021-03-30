import React from 'react';
import s from './Footer.module.css';

const Footer = ({children}) => {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    );
};

export default Footer;