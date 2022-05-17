import styles from './style.module.css'
import cn from 'classnames';

function Container({ children, isBottom, isTop }) {

  return <div className={cn(styles.container, { [styles.container_bottom]: isBottom }, { [styles.container_top]: isTop })}>
    {children}
  </div>
}

export default Container