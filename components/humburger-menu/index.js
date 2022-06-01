import styles from './style.module.css'
import Nav from '../nav';
import Image from 'next/image';
import cn from 'classnames';
import React, { useEffect } from 'react';
function HumburgerMenu({ humburgerOpened, handleCloseHumburgerClick, handleClick }) {

    useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === 'Escape') {
                handleCloseHumburgerClick();
            }
        }

        // function closeByOverlayClick(evt) {
        //     if (evt.target.classList.contains('humburger-menu__overlay')) {
        //         handleCloseHumburgerClick();
        //     }
        // }

        document.addEventListener('keydown', handleEscClose);
        // document.addEventListener('click', closeByOverlayClick);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
            // document.removeEventListener('click', closeByOverlayClick);
        };
    });


    return <div className={cn(styles.humburgerMenu, { [styles.humburgerMenu_opened]: humburgerOpened })}>
        <div className={styles.humburgerMenu__overlay} onClick={() => {
                    handleCloseHumburgerClick();
                }}></div>
        <div className={styles.humburgerMenu__container}>


            {/* <nav className={styles.nav}>
                    <ul className={styles.navList}>

                        <li className={styles.navList__item}>
                            <button className={styles.navList__link} >Галерея</button>
                        </li>
                        <li className={styles.navList__item}>
                            <button className={styles.navList__link} >Обо мне</button>
                        </li>

                    </ul>

                </nav> */}
            <Nav humburgerOpened={humburgerOpened} handleClick={handleClick} />
            <button className={cn(styles.humburger__close, { [styles.humburger__close_opened]: humburgerOpened })}
                onClick={() => {
                    handleCloseHumburgerClick();
                }}>
                <Image src='/close-button.png' alt='close-icon' layout="fill" objectFit='contain' />
            </button>
        </div>

    </div>



}

export default HumburgerMenu;