// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import style from "./header.css";

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.header_title}>Call a Friend</h1>
            <p className={style.header_subtitle}>your friendly contact app </p>
        </header>
    )
}

export default Header;