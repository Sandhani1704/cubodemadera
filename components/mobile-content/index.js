import styles from './style.module.css'
import cn from 'classnames';
import Image from 'next/image';
import Table from '../table';

function MobileContent() {

    return <div className={styles.cont}>
        <div className={styles.pic}>
            <Image src='/collections-1-mobile.jpg' layout="fill" objectFit='cover' width='100%' height='100%' />
            <p className={styles.pic__caption} >Коллекция Cubo de madera</p>

        </div>
        <div className={styles.pic}>
            <Image src='/collections-2-mobile.jpg' layout="fill" objectFit='cover' width='100%' height='100%' />
            <p className={styles.pic__caption} >Коллекция на ножках</p>

        </div>
        <div className={styles.pic}>
            <Image src='/collections-3-mobile.jpg' layout="fill" objectFit='cover' width='100%' height='100%' />
            <p className={styles.pic__caption} >Кашпо по вашим размерам</p>
        </div>

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