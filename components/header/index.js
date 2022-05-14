import styles from './style.module.css'
import Image from 'next/image'
import Nav from '../nav';
//import logoImage from 'images/logo.png';
function Header() {

  return <div className={styles.header}>
    <div className={styles.logo__container}>

      <Image src='/logo.png' width={50} height={50} alt='logo' className={styles.logo__pic} />
      <p className={styles.logo__text}>
        CUBO DE<br />
        MADERA
      </p>
    </div>
    <Nav />
  </div>

}

export default Header