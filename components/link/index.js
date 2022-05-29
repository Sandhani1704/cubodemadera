import Link from "next/link";
import cn from 'classnames';
import styles from './style.module.css'
import { withRouter } from 'next/router';

function LinkComponent({ href, linkTitle, humburgerOpened, router, target, handleClick }) {


    return <Link href={href} >
        <a onClick={() => {
            handleClick(href);
        }}
            className={cn(styles.link, { [styles.link_opened]: humburgerOpened }, { [styles.link_active]: router.pathname === href })}>
            {/* <Link href={href} > */}
            {/* <a  className={cn(styles.link, { [styles.link_opened]: humburgerOpened }, { [styles.link_active]: router.pathname === href })} target={target}>{linkTitle}</a> */}
            {/* </Link> */}
            {linkTitle}
        </a>
    </Link>
}

export default withRouter(LinkComponent)