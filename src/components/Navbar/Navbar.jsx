import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import s from './Navbar.module.css';

const Navbar = (props) => {
  
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
      {/* <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/friends">
          Friends
        </NavLink>
      </div> */}
      <div className={s.logo}><Friends/></div>
    </nav>
  )
};

export default Navbar;