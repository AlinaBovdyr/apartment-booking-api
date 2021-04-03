import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { ReactComponent as Logo } from './logo.svg';
import s from './AppBar.module.css';

const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <header className={s.header}>
            <a href="/" className={s.logo}>
                <Logo width="25" height="25" />
               <span className={s.logoTitle}><span style={{color: "#fff"}}>GO</span>Home</span>
            </a>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    );
};

export default AppBar;