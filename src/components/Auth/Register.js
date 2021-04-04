import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from '../../redux/auth';
import AuthContainer from '../Containers/AuthContainer';
import AuthBox from '../Containers/AuthBox';
import Input from '../UI/Input';
import Button from '../UI/Button';
import s from './Auth.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                toast.error(`The type of field name - ${name} is not processed`);
        };
    };

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(authOperations.register({ name, email, password }));

        setEmail('');
        setPassword('');
        setName('');
    }
    
    return (
        <AuthContainer>
            <AuthBox title='Регистрация'>
                <form onSubmit={handleSubmit} className={s.form}>
                    <ul className={s.inputList}>
                        <li className={s.inputItem}>
                            <Input
                                name="name"
                                value={name}
                                placeholder="Name"
                                autoComplete="name"
                                onChange={handleChange}
                            />
                        </li>
                        <li className={s.inputItem}>
                            <Input
                                name="email"
                                value={email}
                                placeholder="Email"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </li>
                        <li className={s.inputItem}>
                            <Input
                                name="password"
                                value={password}
                                placeholder="Password"
                                autoComplete="new-password"
                                type="password"
                                onChange={handleChange}
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
                    <Button type="submit" title='Вход' />
                </form>
            </AuthBox>
        </AuthContainer>    
    );
};

export default Login;