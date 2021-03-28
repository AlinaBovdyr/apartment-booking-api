import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { ReactComponent as Logo } from './logo.svg';
import s from './AppBar.module.css';

const AppBar = () => {
    return (
        <header className={s.header}>
            <a>
               <Logo/> GoHome
            </a>
            {/* {isLogIn ? <UserMenu/> : <AuthNav/>} */}
        </header>
    );
};

export default AppBar;