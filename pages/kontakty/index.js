import styles from './style.module.css';
import cn from 'classnames';
import Head from 'next/head';
import Image from 'next/image';

function Kontakty() {
    return <main className={cn(styles.kontakty)}>
        <Head>
            <title>Контакты</title>
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content="cubo de madera" />
            <meta name="description" content="Деревянные кашпо из массива ясеня" />
        </Head>
        <div className={cn(styles.kontakty__cont)}>
            <div className={cn(styles.kontakty__pic)}>
                <Image src='/kontakty-1.jpg' layout="fill" objectFit='cover' width='100%' height='100%' />
            </div>
            <div className={cn(styles.kontakty__contacts)}>
                <p className={cn(styles.kontakty__title)}>Контакты</p>

                <p className={styles.contacts__phone}>tel.<a href="tel:+7(495) 799-16-06" className={styles.contacts__phone_link}> +7 (495) 799-16-06</a></p>
                <p className={styles.contacts__email}>e-mail:<a href="mailto:info@cubodemadera.com" target="_self" className={styles.contacts__email_link}> info@cubodemadera.com</a></p>
                <p className={styles.contacts__paragraph}>График работы интернет магазина:<br />

                    понедельник - пятница с 10 до 18<br />

                    суббота и воскресенье - выходной</p>
                <p className={styles.contacts__address}>129345 Россия, г. Москва Осташковская улица,<br /> дом 4 стр. 7</p>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.3229160783203!2d37.680641216050006!3d55.874412990073274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b536b531d91bd9%3A0xc4fbf9677b3f3695!2sCubo%20de%20madera!5e0!3m2!1sru!2sru!4v1653510984128!5m2!1sru!2sru" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </main>
}

export default Kontakty