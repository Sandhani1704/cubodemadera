import styles from './style.module.css'
import Nav from '../nav';
import Logo from '../logo';
import Image from 'next/image';
import React, { useState } from 'react';
import cn from 'classnames';

function Header() {
  const [humburgerOpened, setHumburgerOpened] = useState(false);
  console.log(humburgerOpened)

  return <header className={cn(styles.header, { [styles.header_opened]: humburgerOpened })}>
    <Logo humburgerOpened={humburgerOpened} />
    <Nav humburgerOpened={humburgerOpened} />
    <div className={cn(styles.header__buttons, { [styles.header__buttons_hidden]: humburgerOpened })}>
      <button className={cn(styles.burger__pic, { [styles.burger__pic_opened]: humburgerOpened })}
        onClick={() => {
          setHumburgerOpened(true);
        }}>
        <Image src='/burger-icon.png' alt='burger-icon' layout="responsive" objectFit='contain' width={80} height={80} />
      </button>

      <button className={cn(styles.header__button, { [styles.header__button_hidden]: humburgerOpened })}>
        КУПИТЬ
      </button>
    </div>
    <button className={cn(styles.header__close, { [styles.header__close_opened]: humburgerOpened })}
      onClick={() => {
        setHumburgerOpened(false);
      }}>
      <Image src='/close-button.png' alt='close-icon' layout="responsive" objectFit='contain' width="100%" height="100%" />
    </button>
  </header>

}

export default Header