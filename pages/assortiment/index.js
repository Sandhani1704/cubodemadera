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
                <title>Купить CUBO DE MADERA в Москве с бережной доставкой: цена на CUBO DE MADERA, в интернет магазине fivemarket</title>
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="cubo de madera" />
                <meta name="description" content="Наши кашпо производятся вручную. Древесина твердой породы ясеня поставляется из регионов Восточной Азии и Дальнего Востока.
                    Прежде чем попасть на производство, древесина проходит тщательный отбор. Только лучшие экземпляры попадают в наш цех.
                    Все материалы, используемые для покрытия кашпо, тонировка, защита, изготавливаются на основе масел, поэтому наши кашпо экологически чистые.
                    Процесс изготовления проходит в несколько этапов и осуществляется специалистами высокого уровня, что также является показателем качества нашей продукции." />
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
                        <h3 className={styles.content__title}>Сочетание форм - признак хорошего дизайнa</h3>
                        <p className={styles.content__text}>Разнообразие размеров напольных кашпо, выполненных в едином стиле, будет являться неповторимым продолжением Вашего интерьера</p>
                        <Button isActive='true' text='Купить' />
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
                        <Image src='/cubodemadera.jpg'
                            layout="fill" objectFit='contain' width='100%' height='100%'
                        />

                    </div>
                    <div className={styles.collection__cont}>
                        <h2 className={styles.collection__title}>Коллекция Сubo de madera</h2>
                        <p className={styles.collection__text}>Эксклюзивный внешний вид кашпо в виде закрытой бесшовной формы с круглым отверстием для посадки растений.<br />

                            Четкие лаконичные формы, природная красота дерева гармонично впишутся в любой современный интерьер,
                            будь то офисное пространство, жилой интерьер, кафе или ресторан. Форма кашпо подчеркнет графичность силуэта растения,
                            а линейная структура дерева повторит рисунок листьев. Не менее привлекательно в оригинальных кашпо Cubo de madera
                            смотрятся  искусственные растения и декоративные ветки.<br />

                            Виды комплектаций: система автополива, пластиковый вкладыш, для искусственных растений.</p>

                    </div>
                </div>

                <div className={cn(styles.collection, styles.collection_clasico)}>

                    <div className={cn(styles.collection__cont, styles.collection__cont_small)}>
                        <h2 className={styles.collection__title}>Коллекция Сlasico</h2>
                        <p className={styles.collection__text}>Кашпо с открытыми бортами и объемной нишей для посадки растений.<br />
                            Комплектация для живых растений включает в себя съемное кашпо, что значительно упрощает уход и пересадку растений.
                            Внутренняя пластиковая облицовка кашпо защищает дерево от влаги, увеличивая тем самым срок службы.
                            Идеально подойдет для групповой посадки растений и ковровой посадки травы.
                            Не менее привлекательно в оригинальных кашпо коллекции «Clasico» смотрятся искусственные растения и декоративные ветки.<br />
                            Виды комплектаций: система автополива, пластиковый вкладыш, для искусственных растений.</p>

                    </div>
                    <div className={styles.collection__picture}>
                        <Image src='/clasico-1.webp'
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
                        <p className={styles.collection__text}>Данная система сохраняет достаточное количество влаги, в том

                            числе и для влаголюбивых растений. Позволяет не

                            осуществлять полив до 3-4 недель. Подходит для любых

                            растений, от суккулентов до орхидей. Субстрат за счёт своих

                            многочисленных пор поглощает и постепенно выделяет

                            необходимые растению питательные вещества и влагу.

                            Содержит минералы, регулирующие кислотность почвы и

                            необходимые для роста корневой системы. Позволяет

                            не использовать удобрения. Исключает появление насекомых.

                            Включает в себя индикатор уровня воды и дренажную трубку

                            для удобства ухода за растениями.</p>

                    </div>

                </div>
                <div className={styles.text__cont}>
                    <h2 className={styles.collection__title}>Кашпо по вашим размерам</h2>
                    <p className={styles.collection__text}>Фитодизайн - это особый вид искусства, выполняющий как эстетические,
                        так и утилитарные функции, активно влияет на характер формирования интерьера и является таким
                        же равноценным компонентом оформления среды, как отделка стен, меблировка.
                        С его помощью можно повысить художественную выразительность внутреннего пространства,
                        совершенствовать его функциональную организацию. Выбор материала, цвета, размера кашпо
                        играют в этом большую роль. Именно поэтому для вашего удобства мы изготавливаем кашпо по индивидуальным размерам.
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
                        <Button isActive='true' text='Купить' />
                    </div>
                </div>

            </Container>
        </main>

    )

}

export default withRouter(Assortiment)