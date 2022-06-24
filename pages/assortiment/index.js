import styles from './style.module.css';
import Image from 'next/image'
import cn from 'classnames';
import Head from 'next/head';
import { Container, Button } from '../../components';
import { withRouter } from 'next/router';

function Assortiment() {
    return (
        <main className={styles.main}>
            <Head>
                <title>Ассортимент кашпо CUBO DE MADERA</title>
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="cubo de madera" />
                <meta name="description" content="Виды комплектаций и исполнений кашпо CUBO DE MADERA" />
            </Head>
            <div className={styles.pic}>
                <Image
                    alt="background"
                    src="/assortimentBackground.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <Container >

                <div className={styles.info__pic}>
                    <Image src='/assortiment-top.jpg'
                        layout="fill" objectFit='cover'
                    />
                    <div className={styles.content__cont}>
                        <h1 className={styles.content__title}>Сочетание форм - признак хорошего дизайнa</h1>
                        <p className={styles.content__text}>Разнообразие размеров напольных кашпо, выполненных в едином стиле, будет являться неповторимым продолжением Вашего интерьера</p>
                        {/* <Button isActive='true' text='Купить' /> */}
                    </div>
                </div>

            </Container>

            <div className={styles.info__content}>
                <p className={styles.info__paragraph}>Наши кашпо производятся вручную. Древесина твердой породы ясеня поставляется из регионов Восточной Азии и Дальнего Востока.
                    Прежде чем попасть на производство, древесина проходит тщательный отбор. Только лучшие экземпляры попадают в наш цех.
                    Все материалы, используемые для покрытия кашпо, тонировка, защита, изготавливаются на основе масел, поэтому наши кашпо экологически чистые.
                    Процесс изготовления проходит в несколько этапов и осуществляется специалистами высокого уровня, что также является показателем качества нашей продукции.</p>
                <div className={styles.collection}>
                    <div className={styles.collection__picture}>
                        <Image src='/assortiment_from_up-to_down_num1.jpg'
                            layout="fill" objectFit='contain' width='100%' height='100%'
                        />

                    </div>
                    <div className={styles.collection__cont}>
                        <h2 className={styles.collection__title}>Коллекция кашпо СUBO DE MADERA</h2>
                        <p className={styles.collection__text}>Эксклюзивный внешний вид кашпо в виде закрытой бесшовной формы с круглым отверстием для посадки растений.<br />

                            Четкие лаконичные формы, природная красота дерева гармонично впишутся в любой современный интерьер, будь то офисное пространство, жилой интерьер, кафе или ресторан.
                            Форма кашпо подчеркнет графичность силуэта растения, а линейная структура дерева повторит рисунок листьев.
                            Кашпо будет органично выглядеть в таких интерьерных стилях как Hi-tech, Loft, Eko-style, Minimalism. Не менее привлекательно
                            в оригинальных кашпо CUBO DE MADERA смотрятся искусственные растения и декоративные ветки.<br />

                            Виды комплектаций: система автополива, пластиковый вкладыш, для искусственных растений. Кашпо предназначается для использования в интерьере.</p>

                    </div>
                </div>

                <div className={cn(styles.collection, styles.collection_clasico)}>

                    <div className={cn(styles.collection__cont, styles.collection__cont_small)}>
                        <h2 className={styles.collection__title}>Коллекция кашпо СUBO DE MADERA на подставке</h2>
                        <p className={styles.collection__text}>Кашпо изготавливаются в форме куба или прямоугольника: 
                        такие универсальные формы наиболее удобны и востребованы. 
                        Прямоугольные разновидности идеально подходят для высадки цветочных композиций, 
                        кубические модели позволяют максимально эффектно продемонстрировать особенности растений, раскрывая их красоту. 
                        Кашпо будет органично выглядеть в таких интерьерных стилях как Hi-tech, Loft, Eko-style, Minimalism. 
                        В комплект входят вместительные посадочные вставки. Кашпо предназначается для использования в интерьере.</p>

                    </div>
                    <div className={styles.collection__picture}>
                        <Image src='/assortiment_from_up-to_down_num2.jpg'
                            layout="fill" objectFit='contain'
                        />
                    </div>
                </div>
                <div className={cn(styles.collection)}>
                    <div className={styles.collection__picture}>
                        <Image src='/auto-poliv.jpg'
                            layout="fill" objectFit='contain'

                        />

                    </div>
                    <div className={cn(styles.collection__cont)}>
                        <h2 className={styles.collection__title}>Система автополива</h2>
                        <p className={styles.collection__text}>Данная система сохраняет достаточное количество влаги, 
                        в том числе и для влаголюбивых растений. Позволяет не осуществлять полив до 3-4 недель. 
                        Подходит для любых растений, от суккулентов до орхидей. 
                        Включает в себя индикатор уровня воды и дренажную трубку для удобства ухода за растениями.</p>

                    </div>

                </div>
                <div className={styles.text__cont} id='yourSizePot' >
                    <h2 className={styles.collection__title}>Кашпо по вашим размерам</h2>
                    <p className={styles.collection__text}>Фитодизайн - это особый вид искусства, выполняющий как эстетические, 
                    так и утилитарные функции, активно влияет на характер формирования интерьера и 
                    является таким же равноценным компонентом оформления среды, как отделка стен, меблировка. 
                    С его помощью можно повысить художественную выразительность внутреннего пространства, 
                    совершенствовать его функциональную организацию. Выбор материала, цвета, 
                    размера кашпо играют в этом большую роль. Именно поэтому для вашего 
                    удобства мы изготавливаем кашпо по индивидуальным размерам. 
                    Виды комплектаций: система автополива, пластиковый вкладыш, для искусственных растений.</p>
                </div>
            </div>
            <Container isSmall='true'>

                <div className={cn(styles.info__pic, styles.info__pic_small)}>
                    <Image src='/assortiment-2.jpg'
                        layout="fill"
                        objectFit="cover"

                    />
                    <div className={styles.content__cont}>
                        <h3 className={styles.content__title}>
                            Гармония форм в миниатюре</h3>
                        <p className={styles.content__text}>Превосходно исполненные искусственные суккуленты в прямых формах кашпо  - идеальная композиция,
                            не обременяющая излишним уходом. </p>
                        {/* <Button isActive='true' text='Купить' /> */}
                    </div>
                </div>

            </Container>
        </main>

    )

}

export default withRouter(Assortiment)