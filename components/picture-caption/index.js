import styles from './style.module.css'
import Button from '../button';
import cn from 'classnames';

function PictureCaption({title, isRight, href}) {

    return <div className={cn(styles.container, {[styles.container_right]: isRight } )}>
     <h3 className={styles.title}>{title}</h3>
     <Button text='Подробнее' href={href} target='_blank' />
    </div>
}

export default PictureCaption