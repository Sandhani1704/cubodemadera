import styles from './style.module.css'
import cn from 'classnames';
function Button({isActive, text}) {

  return <button className={cn(styles.button, {[styles.button_active]: isActive })}>{text}</button>
}

export default Button