import { useState } from 'react';
import useResolution from '../../hooks/useResolution';

import { ArrowDownIcon, ArrowRightIcon, OKIcon, TelegramIcon, TwitterIcon, VKIcon, ArrowUpIcon } from '../SVG/SVG';

import './Footer.scss';

const Footer = () => {

    const {isMobile} = useResolution()

    return (
        <footer className="footer">
            <div className="footer__top">
                {isMobile ? <MobileView/> : <TabletDesktopView/>}
                <div className="footer__contacts contacts">
                    <div className="contacts__phones">
                        <div className="contacts__phones_number">
                            <a href="tel:88007755606">8 800 775-56-06</a>
                            <p>Для звонков по России (бесплатно)</p>
                        </div>
                        <div className="contacts__phones_number">
                            <a href="tel:+74952323723">+7 495 232-37-23</a>
                            <p>Для блокировки карт (круглосуточно)</p>
                        </div>
                    </div>
                    <div className="contacts__social">
                        <a href="#">
                            <TelegramIcon/>
                        </a>
                        <a href="#">
                            <VKIcon/>
                        </a>
                        <a href="#">
                            <OKIcon/>
                        </a>
                        <a href="#">
                            <TwitterIcon/>
                        </a>
                    </div>
                </div>

            </div>
            <div className="footer__bot">
                {!isMobile 
                    ? <div className="footer__links">
                        <a href="#">FATCA</a>
                        <a href="#">Страхование и другие услуги НФО</a>
                        <a href="#">Общие условия предоставления банковских гарантий в АО «Солид Банк»</a>
                        <a href="#">Памятки по финансовой безопасности</a>
                        <a href="#">Обеспечение защиты прав потребителей финансовых услуг</a>
                        <a href="#">Методика определения справедливой стоимости финансовых инструментов</a>
                        <a href="#">Политика в отношении обработки персональных данных</a>
                        <a href="#">Лица, ответственные за сведения на сайте</a>
                        <a href="#">Аудиторская компания</a>
                        <a href="#">Надзорные органы</a>
                        <a href="#">Надзорные органы</a>
                        <a href="#">Информация о процентных ставках по договорам банковского вклада с физическими лицами</a>
                        <a href="#">Информация, связанная с совершением Банком действий, предусмотренных пунктом 5.6 статьи 7 ФЗ N 115</a>
                    </div>
                    : null}
                <div className="footer__info">
                    <div className="footer__info_license">
                        © 2004-2021, АО «Солид Банк» , официальный сайт, генеральная лицензия ЦБ РФ № 1329.
                    </div>
                    <div className="footer__info_credits">
                        Разработка сайта - <a href="#">RASA</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const MobileView = () => {

    const {isMobile} = useResolution();

 
    const [privates, setPrivates] = useState(false);
    const [business, setBusiness] = useState(false);
    const [about, setAbout] = useState(false);

    const onPrivatesToggle = () => {
        setPrivates(!privates)
    }

    const onBusinessToggle = () => {
        setBusiness(!business)
    }
    
    const onAboutToggle = () => {
        setAbout(!about)
    }

    return (
        <div className="footer__navigation navigation">
            <div className="navigation__privates">
                <p 
                    className="navigation__title"
                    onClick={() => onPrivatesToggle()}
                >
                    Частным лицам
                    {privates ? <ArrowUpIcon color={'black'}/> : <ArrowDownIcon color={'black'}/>}
                </p>
                
                {privates 
                    ? <ul className="navigation__list">
                        <li className="navigation__list_item">
                            <a href="#">Банковские карты</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Кредиты</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Вклады</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Ипотека</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Страхование</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Сейфовые ячейки</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Открытие счетов</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Обмен валюты</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Переводы</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Переводы</a>
                        </li>
                    </ul>
                    : null}
            </div>
            <div className="navigation__business">
                <p 
                    className="navigation__title"
                    onClick={() => onBusinessToggle()}
                >
                    Бизнесу
                    {business ? <ArrowUpIcon color={'black'}/> : <ArrowDownIcon color={'black'}/>}    
                </p>
                {business
                    ? <ul className="navigation__list">
                        <li className="navigation__list_item">
                            <a href="#">Экспресс-МСБ</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Расчетно-кассовое обслуживание</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Онлайн резервирование счета</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Внешнеэкономическая деятельность</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Зарплатный проект</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Овердрафт</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Кредит</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Лизинг</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Депозиты</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Банковские гарантии</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Факторинг</a>
                        </li>
                    </ul>
                    : null}
            </div>
            <div className="navigation__about">
                <p 
                    className="navigation__title"
                    onClick={() => onAboutToggle()}
                >
                    О банке
                    {about ? <ArrowUpIcon color={'black'}/> : <ArrowDownIcon color={'black'}/>}
                </p>
                {about
                    ? <ul className="navigation__list">
                        <li className="navigation__list_item">
                            <a href="#">Новости</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Вакансии</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Офисы</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Инвестиционные услуги</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">О банке</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Реквизиты</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Тарифы</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Монеты</a>
                        </li>
                        <li className="navigation__list_item">
                            <a href="#">Непрофильные активы</a>
                        </li>
                    </ul>
                    : null}
            </div>
            {isMobile 
                ? <div className="navigation__moreinfo">
                    <p className="navigation__title">
                        Дополнительные пункты
                        <ArrowDownIcon color={'black'}/> 
                    </p>
                </div>
                : null}
        </div>
    )
}

const TabletDesktopView = () => {

    return (
        <div className="footer__navigation navigation">
            <div className="navigation__privates">
                <p className="navigation__title">Частным лицам</p>
                <ul className="navigation__list">
                    <li className="navigation__list_item">
                        <a href="#">Банковские карты</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Кредиты</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Вклады</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Ипотека</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Страхование</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Сейфовые ячейки</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Открытие счетов</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Обмен валюты</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Переводы</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Переводы</a>
                    </li>
                </ul>
            </div>
            <div className="navigation__business">
                <p className="navigation__title">Бизнесу</p>
                <ul className="navigation__list">
                    <li className="navigation__list_item">
                        <a href="#">Экспресс-МСБ</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Расчетно-кассовое обслуживание</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Онлайн резервирование счета</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Внешнеэкономическая деятельность</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Зарплатный проект</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Овердрафт</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Кредит</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Лизинг</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Депозиты</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Банковские гарантии</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Факторинг</a>
                    </li>
                </ul>
            </div>
            <div className="navigation__about">
                <p className="navigation__title">О банке</p>
                <ul className="navigation__list">
                    <li className="navigation__list_item">
                        <a href="#">Новости</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Вакансии</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Офисы</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Инвестиционные услуги</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">О банке</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Реквизиты</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Тарифы</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Монеты</a>
                    </li>
                    <li className="navigation__list_item">
                        <a href="#">Непрофильные активы</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;