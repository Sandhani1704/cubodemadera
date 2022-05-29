import styles from './style.module.css'
import cn from 'classnames';

function Container({ children, isBottom, isTop, isSmall }) {

  return <div className={cn(styles.container, { [styles.container_bottom]: isBottom }, { [styles.container_top]: isTop }, { [styles.container_small]: isSmall })}>
    {children}
  </div>
}

export default Container