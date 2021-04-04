import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { ReactComponent as UserAva } from './user.svg';
import s from './AppBar.module.css';

const UserMenu = () => {
     const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    
    const onLogout = useCallback(() => {
        dispatch(authOperations.logout());
    },[dispatch]);

    return (
        <div className={s.profileBox}>
            <a className={s.link} href="/orders">
                <span className={s.profile}>{name}<UserAva className={s.avatar}/></span>
            </a>
            <button type="button" onClick={onLogout} className={s.btn}>LogOut</button>
        </div>
    );
};

export default UserMenu;