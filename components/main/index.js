import styles from './style.module.css';
import Image from 'next/image'
import Container from '../container';
import Collections from '../collections';

function Main() {
    return (
        <main className={styles.main}>
            <Image
                alt="travel"
                src="/mainBackground.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                className={styles.pic}
            />
            <Container />
            <Collections />
        </main>

    )

}

export default Main