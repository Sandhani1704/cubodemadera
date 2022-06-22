import styles from './style.module.css';
import cn from 'classnames';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import gallery from 'configs/gallery';
import { ImagePopup } from '../../components';
import Link from "next/link";
import shop from 'configs/shop';

function Shop() {
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

    // const handleCardClick = (image) => {
    //     setSelectedImage(image)
    //     setIsImagePopupOpen(true);
    // }

    // function handleCloseCardClick() {
    //     setIsImagePopupOpen(false)
    // }


    return <main className={cn(styles.shop)}>
        {/* <Head>
            <title>Галерея кашпо CUBO DE MADERA</title>
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content="cubo de madera" />
            <meta name="description" content="Фотографии в интерьере кашпо CUBO DE MADERA" />
        </Head> */}
        <div className={styles.background}>
            <Image
                alt="background"
                src="/shopBackground.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>

        {shop.map(productItem => (
            <Link href={`/product-page/${productItem.id}`} key={productItem.id}>
                <div className={cn(styles.productItem)} key={productItem.id} >
                    <a className={styles.productItem__image}>
                        <Image src={productItem.mainLink} layout="fill" objectFit='contain' />
                        <button className={cn(styles.productItem__button)} >Быстрый просмотр</button>
                    </a>

                    <h3 className={styles.productItem__name} >{productItem.name}</h3>
                    <span className={styles.productItem__price} >{productItem.price} руб.</span>
                </div>
            </Link>
        )
        )}


    </main>

    //2&nbsp;090,00 ₽
}

export default Shop