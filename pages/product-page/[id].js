import styles from './style.module.css';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import shop from 'configs/shop';
import { Button } from '../../components';
import { v4 as uuidv4 } from 'uuid';
import { ImagePopup } from '../../components';

function productPage({ card }) {

    const [mainImage, setMainImage] = useState(card.images[0]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [nextButton, setNextButton] = useState(true);
    const [backButton, setBackButton] = useState(true);

    const allImages = card?.images;

    // const handleChangeMainImage = (image) => {
    //     const res = card.images.find(card => card === image)
    //     setMainImage(res)
    // }
    const handleChangeMainImage = (image) => {
        const res = card.images.find(card => card === image.replace(/S/g, ''))
        setMainImage(res)
    }

    const handleCardClick = (image) => {
        const indexCard = allImages.indexOf(image);
        setSelectedImage(image);
        setIsImagePopupOpen(true);
        if (indexCard === 0) {
            setBackButton(false);
        } else {
            setBackButton(true);
        }
        if (allImages === undefined) {
            return;
        }
        if (indexCard === allImages.length - 1) {
            setNextButton(false);
        } else {
            setNextButton(true);
        }
    }

    function handleCloseCardClick() {
        setIsImagePopupOpen(false)
    }

    function handleShowButtonNext(image) {
        if (allImages === undefined) {
            return;
        }
        const indexCard = allImages.indexOf(image);
        if (indexCard === undefined) {
            return;
        }
        const nextCardIndex = indexCard + 1;
        const nextCard = allImages[nextCardIndex];
        if (nextCard === undefined) {
            return;
        }
        setSelectedImage(nextCard);
        if (allImages.length === undefined) {
            return;
        }
        if (indexCard === allImages.length - 2) {
            setNextButton(false);
        } else {
            setNextButton(true);
        }
        if (allImages.indexOf(nextCard) === 0) {
            setBackButton(false);
        } else {
            setBackButton(true);
        }
    }

    function handleShowButtonPrevious(image) {
        if (allImages === undefined) {
            return;
        }
        const indexCard = allImages.indexOf(image);
        if (indexCard === undefined) {
            return;
        }
        console.log(indexCard)
        const previousCardIndex = indexCard - 1;
        const previousCard = allImages[previousCardIndex];
        if (previousCard === undefined) {
            return;
        }
        setSelectedImage(previousCard);
        if (previousCardIndex === 0) {
            setBackButton(false);
        } else {
            setBackButton(true);
        }
        if (allImages === undefined) {
            return;
        }
        if (allImages.indexOf(previousCard) === allImages.length - 1) {
            setNextButton(false);
        } else {
            setNextButton(true);
        }
    }


    return <div className={styles.productPage}  >
        <Head>
            <title>{`Купить ${card.name} в Москве с бережной доставкой: цена на ${card.name}, в интернет магазине CUBO DE MADERA`}</title>
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content={card.name}></meta>
            <meta name="description" content={`${card.name}, широкий✅ выбор в интернет-магазине CUBO DE MADERA. Большие скидки.☝ Купить ${card.name} с гарантией и надежной доставкой.`}></meta>
        </Head>
        <div className={styles.background}>
            <Image
                alt="background"
                src="/shopBackground.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className={styles.productPage__cardCont}>
            <div className={styles.productPage__imageCont}>
                <div className={styles.productPage__image} onClick={() => handleCardClick(mainImage)}>
                    <Image src={mainImage} layout="fill" objectFit='contain' />
                </div>
                <div className={styles.productPage__priceInfo}>
                    <p className={styles.productPage__id}>Артикул: {card.id}</p>
                    <p className={styles.productPage__price}>{card.price} руб.</p>
                    <Button isActive='true' text='Купить' href={card.buttonToFM} isProductPage='true' />
                </div>
            </div>
            <div className={styles.productPage__cardsImages}>

                {card?.imagesSmall.slice(1).map(image => (
                    <div className={styles.productPage__cardImage} key={uuidv4()} onClick={() => handleChangeMainImage(image)}>
                        <Image src={image} layout="fill" objectFit='cover' />
                    </div>
                ))}

            </div>
        </div>

        <div className={styles.productPage__descriptionSection}>
            <div className={styles.productPage__descriptionCont}>
                <h4 className={styles.productPage__title}>Описание</h4>
                <div className={styles.productPage__description}>
                    <p className={styles.productPage__detailedDescription}><span className={styles.productPage__name} >{card.name} </span>
                        {card.description.detailedDescription} </p>

                    <p className={styles.productPage__detailedDescription}><strong><span className={styles.productPage__name}>{card.name}</span></strong> {card.description.propertyDescriptionTitle}</p>
                    <ul className={styles.productPage__qualities} >
                        {card.description.propertyDescription.map(prop => (
                            <li className={styles.productPage__qualitiesItem} key={prop}>{prop}</li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className={styles.productPage__properties}>
                <h4 className={styles.productPage__title}>Характеристики</h4>
                <div className={styles.props__list}>
                    <div className={styles.props__item}>
                        <div className={styles.props__name}><span className={styles.char__name}>Бренд</span></div>
                        <div className={styles.props__value}><span className={styles.char__value}>CUBO DE MADERA</span></div>
                    </div>
                </div>

                <div className={styles.props__list}>
                    <div className={styles.props__item}>
                        <div className={styles.props__name}><span className={styles.char__name}>Высота (см.)</span></div>
                        <div className={styles.props__value}><span className={styles.char__value}>{card.properties[3].height}</span></div>
                    </div>
                </div>

                <div className={styles.props__list}>
                    <div className={styles.props__item}>
                        <div className={styles.props__name}><span className={styles.char__name}>Диаметр / Длина (см.)</span></div>
                        <div className={styles.props__value}><span className={styles.char__value}> {card.properties[1].length}</span></div>
                    </div>
                </div>

                <div className={styles.props__list}>
                    <div className={styles.props__item}>
                        <div className={styles.props__name}><span className={styles.char__name}>Ширина (см.)</span></div>
                        <div className={styles.props__value}><span className={styles.char__value}>{card.properties[2].width}</span></div>
                    </div>
                </div>

                <div className={styles.props__list}>
                    <div className={styles.props__item}>
                        <div className={styles.props__name}><span className={styles.char__name}>Цвет:</span></div>
                        <div className={styles.props__value}><span className={styles.char__value}>{card.properties[0].color}</span></div>
                    </div>
                </div>

                <div className={styles.props__list}>
                    <div className={styles.props__item}>
                        <div className={styles.props__name}><span className={styles.char__name}>Внутренняя вставка</span></div>
                        <div className={styles.props__value}><span className={styles.char__value}>{card.properties[4].insert}</span></div>
                    </div>
                </div>

                <div className={styles.props__list}>
                    <div className={styles.props__item}>
                        <div className={styles.props__name}><span className={styles.char__name}>Поверхность</span></div>
                        <div className={styles.props__value}><span className={styles.char__value}>{card.properties[5].surface}</span></div>
                    </div>
                </div>

                <div className={styles.props__list}>
                    <div className={styles.props__item}>
                        <div className={styles.props__name}><span className={styles.char__name}>Материал</span></div>
                        <div className={styles.props__value}><span className={styles.char__value}>{card.properties[6].material}</span></div>
                    </div>
                </div>




            </div>
        </div>
        <ImagePopup
            image={selectedImage}
            isOpen={isImagePopupOpen}
            backButton={backButton}
            nextButton={nextButton}
            handleCloseCardClick={handleCloseCardClick}
            handleShowButtonNext={handleShowButtonNext}
            handleShowButtonPrevious={handleShowButtonPrevious}
        />
    </div>


}

export function getStaticPaths() {
    const paths = shop.map((card) => ({
        params: { id: card.id }
    }))
    //console.log(paths)
    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const res = shop.find(card => card.id === params.id)
    // console.log(res)
    return {
        props: {
            card: res
        }
    }
    //return console.log(params.id)
}



export default productPage