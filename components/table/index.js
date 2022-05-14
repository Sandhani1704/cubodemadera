import styles from './style.module.css';
import cn from 'classnames';

function Table({heading1, text1, heading2, text2, heading3, text3, isWhite}) {

    return <div className={cn(styles.table, {[styles.table_white]: isWhite })}>
        <div className={styles.table__cell}>
            <h3 className={styles.table__heading}>{heading1}</h3>
            <p className={styles.table__text}>{text1}</p>
        </div>
        <div className={styles.table__cell}>
            <h3 className={styles.table__heading}>{heading2}</h3>
            <p className={styles.table__text}>{text2}</p>
        </div>
        <div className={styles.table__cell}>
            <h3 className={styles.table__heading}>{heading3}</h3>
            <p className={styles.table__text}>{text3}</p>
        </div>
    </div>
}

export default Table