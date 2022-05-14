import styles from './style.module.css';
import Image from 'next/image'
import Container from '../container';
import Collections from '../collections';

function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.pi}>
            <Image
                alt="background"
                src="/mainBackground.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                
                
            />
            </div>
            <Container />
            <Collections />
        </main>

    )

}

export default Main