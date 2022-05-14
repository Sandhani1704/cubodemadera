import styles from './style.module.css'
import Image from 'next/image'
//import logoImage from 'images/logo.png';

function Collections() {

    return <div className={styles.container}>
        <h3 className={styles.title}>
            Cubo de madera —  новое слово в фитодизайне
        </h3>
        <p className={styles.text}>В проектировании наших кашпо мы уделяем большое внимание не только  внешнему виду, но и созданию максимально комфортной среды для содержания ваших растений.</p>
        <div className={styles.container__pics}>
            <Image src='/collections-1.jpg'
                width={436} height={220}
                objectFit="cover"
                className={styles.pic}
            />
            <Image src='/collections-2.jpg'
                width={436} height={220}
                objectFit="cover"
                className={styles.pic}
            />

        </div>

        <p className={styles.text}>Прямые формы деревянных кашпо Cudo de Madera позволяют органически влиться
            в любое стилистическое решение современного дизайна.
            При этом натуральный материал позволяет реализовать природоориентированный концепт в интерьере.</p>
        <Image src='/collections-3.jpg'
            width={980} height={230}
            objectFit="cover"
            className={styles.picinfo}
        />
        <div className={styles.table }>
            <div className={styles.table__cell}>
                <h3 className={styles.table__heading}>Встроенная система автополива</h3>
                <p className={styles.table__text}>Полный комплект для комфортного ухода за растениями</p>
            </div>
            <div className={styles.table__cell}>
                <h3 className={styles.table__heading}>Пластиковый вкладыш</h3>
                <p className={styles.table__text}>Стандартный вариант кашпо со встроенной пластиковой ёмкостью</p>
            </div>
            <div className={styles.table__cell}>
                <h3 className={styles.table__heading}>Для искусственных растений</h3>
                <p className={styles.table__text}>Кашпо без внутренней гидроизоляционной вставки</p>
            </div>
        </div>
        <div className={styles.picture__info }>
        <Image src='/collections-4.jpg'
            width={980} height={400}
            objectFit="cover"
            className={styles.pic}

        />
         <div className={styles.picture__table}>
            <div className={styles.table__cell}>
                <h3 className={styles.table__heading}>Встроенная система автополива</h3>
                <p className={styles.table__text}>Полный комплект для комфортного ухода за растениями</p>
            </div>
            <div className={styles.table__cell}>
                <h3 className={styles.table__heading}>Пластиковый вкладыш</h3>
                <p className={styles.table__text}>Стандартный вариант кашпо со встроенной пластиковой ёмкостью</p>
            </div>
            <div className={styles.table__cell}>
                <h3 className={styles.table__heading}>Для искусственных растений</h3>
                <p className={styles.table__text}>Кашпо без внутренней гидроизоляционной вставки</p>
            </div>
        </div>
        </div>
    </div>

}

export default Collections