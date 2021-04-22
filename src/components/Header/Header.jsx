import React from 'react';
import s from './Header.module.css';
import logoForHeader from './logoForHeader.svg';


const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.menu}>
        <span className={s.item}></span>
        <span className={s.item}></span>
        <span className={s.item}></span>
      </div>
      <div className={s.search}>
        <form action="" className={s.search_form}>
          <div className="" className={s.search_input}>
            <input type="text"/>
          </div>
          <button className={s.search_button}>
          <svg width="32" height="2" className={s.search_svg} version="1.1" viewBox="0 0 32 32" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg>
          </button>
        </form>
      </div>
      <div className={s.logo}>
        <img href="./logoForHeader.png" />
      </div>
      <div className={s.log_reg}>
        <a href="#" className={s.btn}>Login</a>
        <a href="#" className={s.btn}>Register</a>
      </div>
    </header>
  );
};

export default Header;
