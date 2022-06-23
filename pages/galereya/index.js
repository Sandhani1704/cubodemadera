import styles from './style.module.css';
import cn from 'classnames';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import gallery from 'configs/gallery';
import { ImagePopup } from '../../components';

function Galereya() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);



    const handleCardClick = (image) => {
        setSelectedImage(image)
        setIsImagePopupOpen(true);
    }

    function handleCloseCardClick() {
        setIsImagePopupOpen(false)
    }


    return <main className={cn(styles.galereya)}>
        <Head>
            <title>Галерея кашпо CUBO DE MADERA</title>
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content="cubo de madera" />
            <meta name="description" content="Фотографии в интерьере кашпо CUBO DE MADERA" />
        </Head>
        <div className={styles.background}>
            <Image
                alt="background"
                src="/galereyaBackground.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </div>
        <p className={cn(styles.galereya__text)}>Стилизованный дизайн кашпо СUBO DE MADERA является великолепным продолжением в
            современных интерьерных  решениях, таких как Hi-tech, Loft, Eko-style, Minimalism.
            Тональность наших изделий находит благозвучный отголосок в разнообразной цветовой палитре интерьеров.
            Широкий размерный ряд напольных кашпо позволит создать единый ансамбль,
            который гармонично вольется в ваш интерьер. </p>

        <div className={cn(styles.galereya__cont)}>
            {gallery.map(item => (
                <button key={item.src} className={cn(styles.galereya__item, styles[`${item.className}`])} onClick={() => handleCardClick(item)}>
                    <Image src={item.src} layout="fill" objectFit='cover' />
                </button>
            )
            )}
        </div>
        <ImagePopup
            image={selectedImage}
            isOpen={isImagePopupOpen}
            handleCloseCardClick={handleCloseCardClick}
        />

    </main>
}

export default Galereya