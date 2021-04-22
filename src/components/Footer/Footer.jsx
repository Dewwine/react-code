import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
        
        <div className={s.contacts}>
            <a href="tel:+380669463673" className={s.items}>Ткаченко Павел</a>
            <a href="tel:+380973883029" className={s.items}>Бабенко Антон</a>
            <a href="#" className={s.items}>О нас</a>
        </div>
        <p className = {s.footerpar}>
            Copyleft 2021.
            Babenko Anton.
            Tkachenko Pavel.
            HighTecCode.
        </p>
        </footer>
        );
    };
    

export default Footer;