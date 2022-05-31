import styles from './style.module.css'
import Logo from '../logo';
import Image from 'next/image'
function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.footer__container}>
      <Logo isBottom='true' />
      <div className={styles.contacts}>
        <p className={styles.contacts__address}>129345 Россия, г. Москва Осташковская улица, дом 4 стр. 7</p>
        <a href="tel:+7(495) 799-16-06" className={styles.contacts__phone}>+7 (495) 799-16-06</a>
        <a href="mailto:info@cubodemadera.com" target="_self" className={styles.contacts__email}>info@cubodemadera.com</a>
      </div>
      <div className={styles.border}></div>
      <div className={styles.footer__caption}>
        <p className={styles.footer__text}>Design studio Pavel Grosse</p>
        <div className={styles.footer__social}>
          <a href="https://www.instagram.com/cubodemadera/" target="_blank" rel="noreferrer noopener" className={styles.footer__link}>
            <Image src='/instagram-1.png'
              layout="fill" objectFit='cover' width='100%' height='100%'
            />
          </a>
          <p className={styles.footer__dates}>© 2017-2022 CUBO DE MADERA</p>
        </div>
      </div>
    </div>

  </footer>
}

export default Footer