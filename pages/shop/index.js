import styles from './style.module.css';
import cn from 'classnames';
import Image from 'next/image';
import Link from "next/link";
import shop from 'configs/shop';

function Shop() {

    return <main className={cn(styles.shop)}>

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
                        <button className={cn(styles.productItem__button)} >Подробнее</button>
                    </a>
                    <h3 className={styles.productItem__name} >{productItem.name}</h3>
                    <span className={styles.productItem__price} >{productItem.price} руб.</span>
                </div>
            </Link>
        )
        )}


    </main>

}

export default Shop