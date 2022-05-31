import styles from './style.module.css';
import Image from 'next/image'
import Container from '../container';
import Collections from '../collections';
import TopContent from '../top-content';
import BottomContent from '../bottom-content';
import MobileContent from '../mobile-content';

function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.pic}>
                <Image
                    alt="background"
                    src="/mainBackground.jpg"
                    layout="fill"
                    objectFit="cover"
                    // quality={100}
                />
            </div>
            <Container isTop='true'>
                <TopContent />
            </Container>
            <Collections />
            <Container isBottom='true'>
                <BottomContent />
            </Container>
            <MobileContent />
        </main>

    )

}

export default Main