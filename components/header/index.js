import styles from './style.module.css'
import Nav from '../nav';
import HumburgerMenu from '../humburger-menu';
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

  const handleCloseHumburgerClick = () => {
    setHumburgerOpened(false);
  }

  return <>
    <HumburgerMenu humburgerOpened={humburgerOpened} handleCloseHumburgerClick={handleCloseHumburgerClick} handleClick={handleClick} />

    <header className={cn(styles.header, { [styles.header_opened]: humburgerOpened })}>

      <div className={styles.header__cont}>
        <Logo humburgerOpened={humburgerOpened} />
        <Nav handleClick={handleClick} />
        <button className={cn(styles.burger__pic, { [styles.burger__pic_opened]: humburgerOpened })}
          onClick={() => {
            setHumburgerOpened(true);
          }}>
          <Image src='/burger-icon.png' alt='burger-icon' layout="responsive" objectFit='contain' width={80} height={80} />
        </button>

      </div>
    </header>
  </>
}

export default Header