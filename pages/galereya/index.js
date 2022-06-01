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
        <p className={cn(styles.galereya__text)}>Стилизованный дизайн кашпо Cubo de madera является великолепным продолжением в
            современных интерьерных  решениях, таких как Hi-tech, Loft, Eko-style, Minimalism.
            Тональность наших изделий находит благозвучный отголосок в разнообразной цветовой палитре интерьеров.
            Широкий размерный ряд настольных и напольных кашпо позволит создать единый ансамбль,
            который гармонично вольется в ваш интерьер. </p>

        <div className={cn(styles.galereya__cont)}>
            {gallery.map(item => (
                <button className={cn(styles.galereya__item, styles[`${item.className}`])}  onClick={() => handleCardClick(item)}>
                    <Image src={item.src} layout="fill" objectFit='cover' />
                </button>
            )
            )}

            {/* <div className={cn(styles.galereya__item2)}>
                <Image src='/item-2.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item3)}>
                <Image src='/item-3.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item4)}>
                <Image src='/item-4.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item5)}>
                <Image src='/item-5.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item6)}>
                <Image src='/item-6.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item7)}>
                <Image src='/item-7.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item8)}>
                <Image src='/item-8.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item9)}>
                <Image src='/item-9.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item10)}>
                <Image src='/item-10.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item11)}>
                <Image src='/item-11.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item12)}>
                <Image src='/item-12.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item13)}>
                <Image src='/item-13.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item14)}>
                <Image src='/item-14.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item15)}>
                <Image src='/item-15.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item16)}>
                <Image src='/item-16.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item17)}>
                <Image src='/item-17.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item18)}>
                <Image src='/item-18.jpg' layout="fill" objectFit='cover' />
            </div>
            <div className={cn(styles.galereya__item19)}>
                <Image src='/item-19.jpg' layout="fill" objectFit='cover' />
            </div> */}
        </div>
        <ImagePopup
            image={selectedImage}
            isOpen={isImagePopupOpen}
            handleCloseCardClick={handleCloseCardClick}
        />

    </main>
}

export default Galereya