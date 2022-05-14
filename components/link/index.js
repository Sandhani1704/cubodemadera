import Link from "next/link";
import styles from './style.module.css'
function LinkComponent() {
    return <Link href='/buy' className={styles.link}><a>КУПИТЬ</a></Link>
}

export default LinkComponent