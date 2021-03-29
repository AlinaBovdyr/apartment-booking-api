import React from 'react';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { ReactComponent as Logo } from './logo.svg';
import s from './AppBar.module.css';

const AppBar = ({isLogIn}) => {
    return (
        <header className={s.header}>
            <a href="/" className={s.logo}>
                <Logo width="25" height="25" />
               <span className={s.logoTitle}><span style={{color: "#fff"}}>GO</span>Home</span>
            </a>
            {true ? <UserMenu/> : <AuthNav/>}
        </header>
    );
};

export default AppBar;