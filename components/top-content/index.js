import styles from './style.module.css'
import Image from 'next/image'
import Button from '../button';

function TopContent() {
  
  return <div className={styles.info}>
    <div className={styles.info__cont}>
      <p className={styles.info__text}>
        Индивидуальный стиль вашего интерьера
      </p>
      <p className={styles.info__caption}>Деревянные  кашпо из массива ясеня</p>
      <div className={styles.info__buttons}>
        <Button isActive='true' text='Купить' /> 
        <Button text='Подробнее' />
      </div>
    </div>
    <Image src='/info-top.jpg'
      width={980} height={480}
      objectFit="cover"
      className={styles.info__pic}
    />
  </div>
}

export default TopContent