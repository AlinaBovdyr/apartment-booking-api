import React from 'react';
import { ReactComponent as User } from './user.svg';
import s from './AppBar.module.css';

const UserMenu = () => {
    return (
        <div>
            <a className={s.link} href="/orders">
                <span className={s.profile}>профиль<User className={s.avatar}/></span>
            </a>
        </div>
    );
};

export default UserMenu;