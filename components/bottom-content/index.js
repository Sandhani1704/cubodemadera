import styles from './style.module.css'
import Image from 'next/image';
import Table from '../table';

function BottomContent() {

    return <div className={styles.picture__cont}>
        <Image src='/collections-4.jpg'
            width={980} height={400}
            objectFit="cover"
        />
        <Table isWhite='true' heading1='Система скидок'
            text1='Партнерская программа скидок для дизайнеров, флористов. Программа лояльности для физических лиц'
            heading2='Доставка по всей России'
            text2='Сотрудничаем с ведущими транспортными компаниями для уверенности в сохранности продукции'
            heading3='Экологически чистые материалы'
            text3='Все материалы, используемые в производстве, на натуральной основе и абсолютно безвредны для людей и животных' />
    </div>
}

export default BottomContent