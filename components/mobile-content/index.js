import styles from './style.module.css'
import cn from 'classnames';
import Image from 'next/image';
import Table from '../table';
import Link from "next/link";

function MobileContent() {

    return <div className={styles.cont}>
        <Link href='/assortiment' >
        <a className={styles.pic}>
            <Image src='/collections-1-mobile.jpg' layout="fill" objectFit='cover'  />
            <p className={styles.pic__caption} >Коллекция Cubo de madera</p>

        </a>
        </Link>
        <Link href='/assortiment' >
        <a className={styles.pic}>
            <Image src='/collections-2-mobile.jpg' layout="fill" objectFit='cover'  />
            <p className={styles.pic__caption} >Коллекция на ножках</p>

        </a>
        </Link>
        <Link href='/assortiment' >
        <a className={styles.pic}>
            <Image src='/collections-3-mobile.jpg' layout="fill" objectFit='cover'  />
            <p className={styles.pic__caption} >Кашпо по вашим размерам</p>
        </a>
        </Link>
        <Table
            heading1='Встроенная система автополива'
            text1='Полный комплект для комфортного ухода за растениями'
            heading2='Пластиковый вкладыш'
            text2='Стандартный вариант кашпо со встроенной пластиковой ёмкостью'
            heading3='Для искусственных растений'
            text3='Кашпо без внутренней гидроизоляционной вставки'
            isColumn='true'
        />

    </div>

}

export default MobileContent