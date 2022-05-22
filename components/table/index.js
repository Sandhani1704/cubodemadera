import styles from './style.module.css';
import cn from 'classnames';

function Table({ heading1, text1, heading2, text2, heading3, text3, isWhite, isColumn }) {

    return <div className={cn(styles.table, { [styles.table_white]: isWhite }, { [styles.table_column]: isColumn })}>
        <div className={cn(styles.table__cell, { [styles.table__cell_column]: isColumn })}>
            <h3 className={cn(styles.table__heading, { [styles.table__heading_column]: isColumn })}>{heading1}</h3>
            <div className={cn(styles.border, { [styles.border_none]: isWhite }, { [styles.border_column]: isColumn })}></div>
            <p className={cn(styles.table__text, { [styles.table__text_column]: isColumn })}>{text1}</p>
        </div>
        <div className={cn(styles.table__cell, { [styles.table__cell_column]: isColumn })}>
            <h3 className={cn(styles.table__heading, { [styles.table__heading_column]: isColumn })}>{heading2}</h3>
            <div className={cn(styles.border, { [styles.border_none]: isWhite }, { [styles.border_column]: isColumn })}></div>
            <p className={cn(styles.table__text, { [styles.table__text_column]: isColumn })}>{text2}</p>
        </div>
        <div className={cn(styles.table__cell, { [styles.table__cell_column]: isColumn })}>
            <h3 className={cn(styles.table__heading, { [styles.table__heading_column]: isColumn })}>{heading3}</h3>
            <div className={cn(styles.border, { [styles.border_none]: isWhite }, { [styles.border_column]: isColumn })}></div>
            <p className={cn(styles.table__text, { [styles.table__text_column]: isColumn })}>{text3}</p>
        </div>
    </div>
}

export default Table