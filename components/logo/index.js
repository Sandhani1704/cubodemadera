import styles from './style.module.css'
import Image from 'next/image'
import cn from 'classnames';
function Logo({humburgerOpened}) {

  return <div className={cn(styles.logo, {[styles.logo_hidden]: humburgerOpened })}>
    <div className={styles.logo__pic}>
      <Image src='/logo.png' alt='logo' layout="responsive" objectFit='contain' width="100%" height="100%"/>
    </div>
    <p className={styles.logo__text}>
      CUBO DE<br />
      MADERA
    </p>
  </div>
}

export default Logo