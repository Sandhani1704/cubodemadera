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
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    });


    return <div className={cn(styles.humburgerMenu, { [styles.humburgerMenu_opened]: humburgerOpened })}>
        <div className={styles.humburgerMenu__overlay} onClick={() => {
            handleCloseHumburgerClick();
        }}></div>
        <div className={styles.humburgerMenu__container}>

            <Nav humburgerOpened={humburgerOpened} handleClick={handleClick} />
            <button className={cn(styles.humburgerMenu__close, { [styles.humburgerMenu__close_opened]: humburgerOpened })}
                onClick={() => {
                    handleCloseHumburgerClick();
                }}>
                <Image src='/close-button.png' alt='close-icon' layout="fill" objectFit='contain' />
                
            </button>
        </div>
    </div>



}

export default HumburgerMenu;