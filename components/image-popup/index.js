// import closeIcon from './close-button.png';
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { NextIcon } from '../assets/icons/next-icon'; BackIcon
import { BackIcon } from '../assets/icons/back-icon';
import cn from 'classnames';

function ImagePopup({ image, isOpen, handleCloseCardClick, backButton, nextButton, handleShowButtonNext, handleShowButtonPrevious }) {

    useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === 'Escape') {
                handleCloseCardClick();
            }
        }
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    });

    //onClick={handleCloseCardClick}

    return <section className={cn(styles.popup, { [styles.popup_opened]: isOpen })} >
        <div className={cn(styles.popup__overlay)} id="modal-overlay"  ></div>

        <div className={styles.popup__image}>
            {backButton && (
                <button
                    onClick={() => {
                        handleShowButtonPrevious(image);
                    }}
                    aria-label="Далее"
                    type="button"
                    className={styles.popupImageBackButton}
                >
                    <span className={styles.popupControllBtnImage}>
                        <BackIcon />
                    </span>
                </button>
            )}
            {image && <Image src={image.src ? image.src : image} layout='fill' objectFit='contain' />}
            {nextButton && (
                <button
                    onClick={() => {
                        handleShowButtonNext(image);
                    }}
                    aria-label="Далее"
                    type="button"
                    className={styles.popupImageNextButton}
                >
                    <span className={styles.popupControllBtnImage}>
                        <NextIcon />
                    </span>
                </button>
            )}
            <button onClick={handleCloseCardClick} type="button" className={styles.popup__close}>
                <svg display='block' width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.7661 41.5683L31.9759 28.778L44.7661 15.9878L41.5686 12.7902L28.7783 25.5805L15.9881 12.7902L12.7905 15.9878L25.5808 28.778L12.7905 41.5683L15.9881 44.7658L28.7783 31.9756L41.5686 44.7658L44.7661 41.5683Z" fill="white" />
                </svg>
            </button>
        </div>


    </section >

}

export default ImagePopup;