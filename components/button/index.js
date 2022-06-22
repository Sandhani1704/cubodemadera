import styles from './style.module.css'
import cn from 'classnames';
function Button({isActive, text, href, target, isProductPage}) {

  return <a href={href} target={target} className={cn(styles.button, {[styles.button_active]: isActive }, {[styles.button_productPage]: isProductPage })}>{text}</a>
}

export default Button