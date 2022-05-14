import styles from './style.module.css'
import Image from 'next/image'
//import logoImage from 'images/logo.png';

function Container() {

  return <div className={styles.info}>



    <div className={styles.info__cont}>
      <p className={styles.info__text}>
        Индивидуальный стиль вашего интерьера
      </p>
      <p className={styles.info__caption}>Деревянные  кашпо из массива ясеня</p>
      <div className={styles.info__buttons}>
        <div className={styles.info__button}>Купить</div> <div className={styles.info__button}>Подробнее</div>
      </div>
    </div>
    <Image src='/info-top.jpg'
      width={980} height={480}
      objectFit="cover"
      // quality={100}
      className={styles.info__pic}
    >

    </Image>
  </div>

}

export default Container