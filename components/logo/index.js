import styles from './style.module.css'
import Image from 'next/image'
import cn from 'classnames';
function Logo({humburgerOpened, isBottom}) {

  return <a href='/' className={cn(styles.logo, {[styles.logo_hidden]: humburgerOpened }, {[styles.logo_bottom]: isBottom })}>
    <div className={styles.logo__pic}>
      <Image src='/logo.png' alt='logo' layout="fill" objectFit='contain' />
    </div>
    <p className={styles.logo__text}>
      CUBO&nbsp;DE<br />
      MADERA
    </p>
  </a>
}

export default Logo