import styles from './style.module.css';
import cn from 'classnames';
import LinkComponent from '../link';
import { withRouter } from 'next/router';

function Nav({ humburgerOpened, handleClick }) {

    return (
        <nav className={cn(styles.navigation, { [styles.navigation_opened]: humburgerOpened })}>
            <ul className={cn(styles.list, { [styles.list_opened]: humburgerOpened })}>
                <li className={cn(styles.list__item, { [styles.list__item_opened]: humburgerOpened })}>
                    <LinkComponent href='/' linkTitle='ГЛАВНАЯ' humburgerOpened={humburgerOpened} handleClick={handleClick} />
                </li>
                <li className={cn(styles.list__item, { [styles.list__item_opened]: humburgerOpened })}>
                    <LinkComponent href='/galereya' linkTitle='ГАЛЕРЕЯ' humburgerOpened={humburgerOpened} handleClick={handleClick} />
                </li>
                <li className={cn(styles.list__item, { [styles.list__item_opened]: humburgerOpened })}>
                    <LinkComponent href='https://fivemarket.ru/catalog/cubo_de_madera/' target='_blank' linkTitle='КУПИТЬ' humburgerOpened={humburgerOpened} handleClick={handleClick} />
                </li>
                <li className={cn(styles.list__item, { [styles.list__item_opened]: humburgerOpened })}>
                    <LinkComponent href='/kak-zakazat' linkTitle='КАК&nbsp;ЗАКАЗАТЬ' humburgerOpened={humburgerOpened} handleClick={handleClick} />
                </li>
                <li className={cn(styles.list__item, { [styles.list__item_opened]: humburgerOpened })}>
                    <LinkComponent href='/assortiment' linkTitle='АССОРТИМЕНТ' humburgerOpened={humburgerOpened} handleClick={handleClick} />
                </li>
                <li className={cn(styles.list__item, { [styles.list__item_opened]: humburgerOpened })}>
                    <LinkComponent href='/kontakty' linkTitle='КОНТАКТЫ' humburgerOpened={humburgerOpened} handleClick={handleClick} />
                </li>
            </ul>
        </nav>
    )

}

export default withRouter(Nav)