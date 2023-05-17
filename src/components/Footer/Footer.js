import { useState } from 'react';
import useResolution from '../../hooks/useResolution';

import { ArrowDownIcon, OKIcon, TelegramIcon, TwitterIcon, VKIcon } from '../SVG/SVG';

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
                            <p>8 800 775-56-06</p>
                            <p>Для звонков по России (бесплатно)</p>
                        </div>
                        <div className="contacts__phones_number">
                            <p>+7 495 232-37-23</p>
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
                    <ArrowDownIcon/>
                </p>
                
                {privates 
                    ? <ul className="navigation__list">
                        <li className="navigation__list_item">Банковские карты</li>
                        <li className="navigation__list_item">Кредиты</li>
                        <li className="navigation__list_item">Вклады</li>
                        <li className="navigation__list_item">Ипотека</li>
                        <li className="navigation__list_item">Страхование</li>
                        <li className="navigation__list_item">Сейфовые ячейки</li>
                        <li className="navigation__list_item">Открытие счетов</li>
                        <li className="navigation__list_item">Обмен валюты</li>
                        <li className="navigation__list_item">Переводы</li>
                        <li className="navigation__list_item">Маркетплейс</li>
                    </ul>
                    : null}
            </div>
            <div className="navigation__business">
                <p 
                    className="navigation__title"
                    onClick={() => onBusinessToggle()}
                >
                    Бизнесу
                    <ArrowDownIcon/>    
                </p>
                {business
                    ? <ul className="navigation__list">
                        <li className="navigation__list_item">Экспресс-МСБ</li>
                        <li className="navigation__list_item">Расчетно-кассовое обслуживание</li>
                        <li className="navigation__list_item">Онлайн резервирование счета</li>
                        <li className="navigation__list_item">Внешнеэкономическая деятельность</li>
                        <li className="navigation__list_item">Зарплатный проект</li>
                        <li className="navigation__list_item">Овердрафт</li>
                        <li className="navigation__list_item">Кредит</li>
                        <li className="navigation__list_item">Лизинг</li>
                        <li className="navigation__list_item">Депозиты</li>
                        <li className="navigation__list_item">Банковские гарантии</li>
                        <li className="navigation__list_item">Факторинг</li>
                    </ul>
                    : null}
            </div>
            <div className="navigation__about">
                <p 
                    className="navigation__title"
                    onClick={() => onAboutToggle()}
                >
                    О банке
                    <ArrowDownIcon/>
                </p>
                {about
                    ? <ul className="navigation__list">
                        <li className="navigation__list_item">Новости</li>
                        <li className="navigation__list_item">Вакансии</li>
                        <li className="navigation__list_item">Офисы</li>
                        <li className="navigation__list_item">Инвестиционные услуги</li>
                        <li className="navigation__list_item">О банке</li>
                        <li className="navigation__list_item">Реквизиты</li>
                        <li className="navigation__list_item">Тарифы</li>
                        <li className="navigation__list_item">Монеты</li>
                        <li className="navigation__list_item">Непрофильные активы</li>
                    </ul>
                    : null}
            </div>
            {isMobile 
                ? <div className="navigation__moreinfo">
                    <p className="navigation__title">
                        Дополнительные пункты
                        <ArrowDownIcon/> 
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
                    <li className="navigation__list_item">Банковские карты</li>
                    <li className="navigation__list_item">Кредиты</li>
                    <li className="navigation__list_item">Вклады</li>
                    <li className="navigation__list_item">Ипотека</li>
                    <li className="navigation__list_item">Страхование</li>
                    <li className="navigation__list_item">Сейфовые ячейки</li>
                    <li className="navigation__list_item">Открытие счетов</li>
                    <li className="navigation__list_item">Обмен валюты</li>
                    <li className="navigation__list_item">Переводы</li>
                    <li className="navigation__list_item">Маркетплейс</li>
                </ul>
            </div>
            <div className="navigation__business">
                <p className="navigation__title">Бизнесу</p>
                <ul className="navigation__list">
                    <li className="navigation__list_item">Экспресс-МСБ</li>
                    <li className="navigation__list_item">Расчетно-кассовое обслуживание</li>
                    <li className="navigation__list_item">Онлайн резервирование счета</li>
                    <li className="navigation__list_item">Внешнеэкономическая деятельность</li>
                    <li className="navigation__list_item">Зарплатный проект</li>
                    <li className="navigation__list_item">Овердрафт</li>
                    <li className="navigation__list_item">Кредит</li>
                    <li className="navigation__list_item">Лизинг</li>
                    <li className="navigation__list_item">Депозиты</li>
                    <li className="navigation__list_item">Банковские гарантии</li>
                    <li className="navigation__list_item">Факторинг</li>
                </ul>
            </div>
            <div className="navigation__about">
                <p className="navigation__title">О банке</p>
                <ul className="navigation__list">
                    <li className="navigation__list_item">Новости</li>
                    <li className="navigation__list_item">Вакансии</li>
                    <li className="navigation__list_item">Офисы</li>
                    <li className="navigation__list_item">Инвестиционные услуги</li>
                    <li className="navigation__list_item">О банке</li>
                    <li className="navigation__list_item">Реквизиты</li>
                    <li className="navigation__list_item">Тарифы</li>
                    <li className="navigation__list_item">Монеты</li>
                    <li className="navigation__list_item">Непрофильные активы</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;