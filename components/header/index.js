import styles from './style.module.css'
import Nav from '../nav';
import Logo from '../logo';
import Image from 'next/image';
import React, { useState } from 'react';
import Router from "next/router";
import cn from 'classnames';

function Header() {
  const [humburgerOpened, setHumburgerOpened] = useState(false);
  const handleClick = (href) => {
    Router.push(href)
    if (humburgerOpened) {
      setHumburgerOpened(false)
    }
  }
  
  return <header className={cn(styles.header, { [styles.header_opened]: humburgerOpened })}>
    <div className={styles.header__cont}>
      <Logo humburgerOpened={humburgerOpened} />
      <Nav humburgerOpened={humburgerOpened}  handleClick={handleClick} />
      {/* <div className={cn(styles.header__buttons, { [styles.header__buttons_hidden]: humburgerOpened })}> */}
        <button className={cn(styles.burger__pic, { [styles.burger__pic_opened]: humburgerOpened })}
          onClick={() => {
            setHumburgerOpened(true);
          }}>
          <Image src='/burger-icon.png' alt='burger-icon' layout="responsive" objectFit='contain' width={80} height={80} />
        </button>

        {/* <button className={cn(styles.header__button, { [styles.header__button_hidden]: humburgerOpened })}>
          КУПИТЬ
        </button> */}
      {/* </div> */}
      <button className={cn(styles.header__close, { [styles.header__close_opened]: humburgerOpened })}
        onClick={() => {
          setHumburgerOpened(false);
        }}>
        <Image src='/close-button.png' alt='close-icon' layout="responsive" objectFit='contain' width="100%" height="100%" />
      </button>
    </div>
  </header>

}

export default Header