import React from 'react';
import AuthContainer from '../Containers/AuthContainer';
import Input from '../UI/Input';
import Button from '../UI/Button';
import s from './Auth.module.css';

const Login = () => {
    return (
        <AuthContainer title='Регистрация'>
            <ul className={s.inputList}>
                <li className={s.inputItem}>
                    <Input
                        name="name"
                        placeholder="Name"
                        autoComplete="name"
                    />
                </li>
                <li className={s.inputItem}>
                    <Input
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                    />
                </li>
                <li className={s.inputItem}>
                    <Input
                        name="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        type="password"
                    />
                </li>
                <li className={s.inputItem}>
                    <Input
                        name="confirm-password"
                        placeholder="Confirm password"
                        autoComplete="confirm-password"
                        type="password"
                    />
                </li>
            </ul>
            <Button title='Вход'/>
        </AuthContainer>
    );
};

export default Login;