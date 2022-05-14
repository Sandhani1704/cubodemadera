import styles from './style.module.css'
import cn from 'classnames';

function Container({ children, isBottom }) {

  return <div className={cn(styles.container, { [styles.container_bottom]: isBottom })}>
    {children}
  </div>
}

export default Container