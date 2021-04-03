import React from 'react';
import Select from '../UI/Select';
import Input from '../UI/Input';
import Button from '../UI/Button';
import s from './AptBar.module.css'

const AptBar = () => {
    return (
        <div className={s.container}>
            <div className={s.fieldWrapper}>
                <Select />
                <Input name="price" placeholder="Цена, от" className={s.input}/>
            </div>
            <Button className={s.btn} title="Подбор жилья"/>
        </div>
    );
};

export default AptBar;