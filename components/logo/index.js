import styles from './style.module.css'
import Image from 'next/image'
import cn from 'classnames';
function Logo({humburgerOpened, isBottom}) {

  return <div className={cn(styles.logo, {[styles.logo_hidden]: humburgerOpened }, {[styles.logo_bottom]: isBottom })}>
    <div className={styles.logo__pic}>
      <Image src='/logo-1.jpg' alt='logo' layout="responsive" objectFit='contain' width='100%' height='100%'/>
    </div>
    <p className={styles.logo__text}>
      CUBO&nbsp;DE<br />
      MADERA
    </p>
  </div>
}

export default Logo