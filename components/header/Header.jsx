import React from 'react'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <h1><span className="material-symbols-outlined">waving_hand</span> Selam</h1>
            <p>Yapılacaklar listesine hoşgeldin.</p>
        </header>
    )
}

export default Header
