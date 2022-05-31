import styles from './style.module.css'
import Image from 'next/image'
import Button from '../button';

function TopContent() {
  
  return <div className={styles.info}>
    <div className={styles.info__cont}>
      <p className={styles.info__text}>
        Индивидуальный стиль вашего интерьера
      </p>
      <h1 className={styles.info__title}>Деревянные кашпо из массива ясеня</h1>
      <div className={styles.info__buttons}>
        <Button isActive='true' text='Купить' href='https://fivemarket.ru/catalog/cubo_de_madera/' target='_blank'/> 
        <Button text='Подробнее' href='/assortiment' />
      </div>
    </div>
    <Image src='/info-top.jpg'
      // width={980} height={480}
      layout="fill"
      objectFit="cover"
      className={styles.info__pic}
    />
  </div>
}

export default TopContent