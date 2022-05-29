import styles from './style.module.css'
import cn from 'classnames';
function Button({isActive, text, href, target}) {

  return <a href={href} target={target} className={cn(styles.button, {[styles.button_active]: isActive })}>{text}</a>
}

export default Button