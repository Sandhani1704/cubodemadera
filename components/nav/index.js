import styles from './style.module.css';
import cn from 'classnames';

function Nav() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <a className={styles.list__link} href="#">ГЛАВНАЯ</a>
                </li>
                <li className={styles.list__item}>
                    <a className={styles.list__link} href="#">ГАЛЕРЕЯ</a>
                </li>
                <li className={styles.list__item}>
                    <a className={styles.list__link} href="#">КУПИТЬ</a>
                </li>
                <li className={styles.list__item}>
                    <a className={styles.list__link} href="#">КАК ЗАКАЗАТЬ</a>
                </li>
                <li className={styles.list__item}>
                    <a className={styles.list__link} href="#">АССОРТИМЕНТ</a>
                </li>
                <li className={styles.list__item}>
                    <a className={styles.list__link} href="#">КОНТАКТЫ</a>
                </li>
            </ul>
        </nav>
    )

}

export default Nav