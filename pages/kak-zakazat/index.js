import styles from './style.module.css';
import cn from 'classnames';
import Image from 'next/image';
import Head from 'next/head';


function HowToOrder() {
    return <main className={cn(styles.zakazat)}>
        <Head>
            <title>Как заказать кашпо CUBO DE MADERA</title>
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content="cubo de madera" />
            <meta name="description" content="Подробнее о доставке и выборе транспортной компании. Доставка по России" />
        </Head>
        <div className={styles.background}>
            <Image
                alt="background"
                src="/HowToOrder.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </div>
        <div className={cn(styles.zakazat__cont)}>
            <h1 className={styles.title}>Как заказать</h1>
            <p>Оформить заказ Вы можете по телефону <a href="tel:+7(495) 799-16-06" className={styles.phone}>+7 (495) 799-16-06</a>  или на сайте fivemarket.ru нажав на кнопку</p>
            <a className={styles.button} href='https://fivemarket.ru/catalog/cubo_de_madera/' target='_blank'>ОФОРМИТЬ ЗАКАЗ <svg className={styles.svg} data-bbox="9 70.9 181 59" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill='#FFFFFF' width='37'  >
                <g>
                    <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                </g>
            </svg></a>
            <a href="mailto:info@cubodemadera.com" target="_self" className={styles.email}>info@cubodemadera.com</a>
            <h6 className={styles.title}>Срок изготовления</h6>
            <p className={styles.text}>Наши кашпо изготавливаются вручную. Срок изготовления заказа от 5 до 10 рабочих дней.</p>
            <h6 className={styles.title}>Доставка</h6>
            <p className={styles.text}>Доставка осуществляется крупнейшими транспортными компаниями. <br />

                Стоимость и срок доставки рассчитывается индивидуально, в зависимости от объема заказа и расположения клиента.</p>
            <h6 className={styles.title}>Самовывоз</h6>
            <p className={styles.text}>Готовый заказ Вы можете забрать по адресу нашего производства: город Москва, Осташковская улица, дом 4 строение 7.  </p>
            <h6 className={styles.title}>Условия возврата товара</h6>
            <p className={styles.text}>Количество и качество товара проверяются Покупателем при приемке товара.<br />

                При выявлении повреждений делается соответствующая отметка в товарной накладной. Необходимо также сделать фотографию обнаруженного повреждения.<br />

                Возврат или обмен товара осуществляется на основании Закона о Защите прав потребителей.<br />

                При отказе от товара оплачивается полная стоимость доставки.<br />

                Возврат товара:<br />

                Потребитель имеет право на обмен товара надлежащего качества в течение четырнадцати дней, не считая дня его покупки.<br />

                Обмен товара надлежащего качества проводится, если указанный товар не был в употреблении, сохранены его товарный вид, потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара.<br />

                Денежные средства за возвращенный товар перечисляются безналичным переводом на банковскую карту, с которой была совершена оплата, или расчетный счет покупателя.<br />

                Товар изготовленный под заказ надлежащего качества возврату и обмену не подлежит.<br />

                Товар не подлежит возврату в случаях:<br />

                - нарушения правил эксплуатации, хранения и транспортировки;<br />

                - наличия механических повреждений (внутренних и внешних), возникших в результате удара или аварии;<br />

                - самостоятельного присоединения к изделию дополнительного оборудования и т.п. – т.е. использование не по назначению.</p>
        </div>

    </main>
}

export default HowToOrder