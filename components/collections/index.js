import styles from './style.module.css'
import Image from 'next/image';
import Table from '../table';
import PictureCaption from '../picture-caption';
import cn from 'classnames';

function Collections() {

    return <div className={styles.container}>
        <h3 className={styles.title}>
            СUBO DE MADERA — новое слово в фитодизайне
        </h3>
        <p className={styles.text}>В проектировании наших кашпо мы уделяем большое внимание не только  внешнему виду,
            но и созданию максимально комфортной среды для содержания ваших растений.</p>

        <div className={styles.container__pics}>
            <div className={styles.pic__container}>
                <Image src='/collections-1-mobile.jpg'
                    width={436} height={220}
                    objectFit="cover"
                    className={styles.pic}
                />
                <PictureCaption title='Коллекция СUBO DE MADERA' href='/shop' />
            </div>
            <div className={styles.pic__container}>
                <Image src='/collections-2-mobile.jpg'
                    width={436} height={220}
                    objectFit="cover"
                    className={styles.pic}
                />
                <PictureCaption title='Коллекция на ножках' href='/shop' />
            </div>
        </div>

        <p className={styles.text}>Прямые формы деревянных кашпо СUBO DE MADERA позволяют органически влиться
            в любое стилистическое решение современного дизайна.
            При этом натуральный материал позволяет реализовать природоориентированный концепт в интерьере.</p>
        <div className={cn(styles.pic__container, styles.pic__container_big)}>
            <Image src='/collections-3.jpg'
                width={880} height={230}
                objectFit="cover"
                className={styles.picinfo}
            />
            <PictureCaption title='Кашпо по вашим размерам' href='/assortiment#yourSizePot' isRight='true' />
        </div>
        <Table
            heading1='Встроенная система автополива'
            text1='Полный комплект для комфортного ухода за растениями'
            heading2='Пластиковый вкладыш'
            text2='Стандартный вариант кашпо со встроенной пластиковой ёмкостью'
            heading3='Для искусственных растений'
            text3='Кашпо без внутренней гидроизоляционной вставки'
        />

    </div>

}

export default Collections