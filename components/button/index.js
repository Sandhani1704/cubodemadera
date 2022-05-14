import styles from './style.module.css'
import cn from 'classnames';
function Button() {

  return <button className={cn(styles.button, styles.button_active)}>Купить</button>
   

}

export default Button