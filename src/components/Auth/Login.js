import React from 'react';
import AuthContainer from '../Containers/AuthContainer';
import AuthBox from '../Containers/AuthBox';
import Input from '../UI/Input';
import Button from '../UI/Button';
import s from './Auth.module.css';

const Login = () => {
    return (
        <AuthContainer>
            <AuthBox title='Логин'>
                <ul className={s.inputList}>
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
                </ul>
                <Button title='Вход'/>
            </AuthBox>
        </AuthContainer>
    );
};

export default Login;