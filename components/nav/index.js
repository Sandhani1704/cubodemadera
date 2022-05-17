import styles from './style.module.css';
import cn from 'classnames';

function Nav({humburgerOpened}) {
    console.log(humburgerOpened)

    return (
        <nav className={cn(styles.navigation, {[styles.navigation_opened]: humburgerOpened })}> 
            <ul className={cn(styles.list, {[styles.list_opened]: humburgerOpened })}> 
                <li className={cn(styles.list__item, {[styles.list__item_opened]: humburgerOpened })}>
                    <a className={cn(styles.list__link, {[styles.list__link_opened]: humburgerOpened })} href="#">ГЛАВНАЯ</a>
                </li>
                <li className={cn(styles.list__item, {[styles.list__item_opened]: humburgerOpened })}>
                    <a className={cn(styles.list__link, {[styles.list__link_opened]: humburgerOpened })} href="#">ГАЛЕРЕЯ</a>
                </li>
                <li className={cn(styles.list__item, {[styles.list__item_opened]: humburgerOpened })}>
                    <a className={cn(styles.list__link, {[styles.list__link_opened]: humburgerOpened })} href="#">КУПИТЬ</a>
                </li>
                <li className={cn(styles.list__item, {[styles.list__item_opened]: humburgerOpened })}>
                    <a className={cn(styles.list__link, {[styles.list__link_opened]: humburgerOpened })} href="#">КАК ЗАКАЗАТЬ</a>
                </li>
                <li className={cn(styles.list__item, {[styles.list__item_opened]: humburgerOpened })}>
                    <a className={cn(styles.list__link, {[styles.list__link_opened]: humburgerOpened })} href="#">АССОРТИМЕНТ</a>
                </li>
                <li className={cn(styles.list__item, {[styles.list__item_opened]: humburgerOpened })}>
                    <a className={cn(styles.list__link, {[styles.list__link_opened]: humburgerOpened })} href="#">КОНТАКТЫ</a>
                </li>
            </ul>
        </nav>
    )

}

export default Nav