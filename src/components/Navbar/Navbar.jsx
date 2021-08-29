import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={s.navigation}>
      <div className={s.item}>
        <NavLink className={`${s.link} ${s.active}`} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/music">
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  )
};

export default Navbar;