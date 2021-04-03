import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../Router/routes';
import s from './AppBar.module.css';

const AuthNav = () => {
    return (
        <nav>
          <NavLink
                to={routes.login}
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Вход
            </NavLink>
            <span className={s.slash}>/</span>
            <NavLink
                to={routes.register}
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Регистрация
            </NavLink>  
        </nav>
    );
};

export default AuthNav;