import React from 'react';
import s from './Containers.module.css';

const Homepage = ({title, children}) => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>{title}</h2>
            {children}
        </div>
    );
};

export default Homepage;