import React from 'react';
// import { NavLink } from 'react-router-dom';
// import routes from '../../Route/routes';
import s from './AppBar.module.css';

const AuthNav = () => {
    return (
        <nav>
            <a className={s.link} href="/login">Вход / </a>
            <a className={s.link} href="/register">Регистрация</a>
          {/* <NavLink
                to={routes.login}
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Вход /
            </NavLink>
            <NavLink
                to={routes.register}
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Регистрация
            </NavLink>   */}
        </nav>
    );
};

export default AuthNav;