import React from 'react';
import s from './Select.module.css';

const Select = () => {
    return (
        <select className={s.select} name="select">
            <option value="value1">Город</option>
        </select>
    );
};

export default Select;