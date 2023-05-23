
import useResolution from '../../hooks/useResolution'
import { ArrowDownIcon, PhoneIcon, LoginIcon, MenuIcon } from '../SVG/SVG'


import logo from '../../resources/images/logo.png'
import './BotHeader.scss'

const BotHeader = () => {

    const {isMobile, isTablet} = useResolution()

    return (
        <>
            {isMobile 
                ? <MobileView/> 
                : isTablet 
                    ? <TabletView/> 
                    : <DesktopView/>
            }
        </>
    )
}

const DesktopView = () => (
    <nav className="botheader">
            <div className="botheader__nav-container">
                <div className="botheader__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <ul className="botheader__nav">
                    <li className="botheader__nav_item">
                        <a href="#">Кредиты</a>
                    </li>
                    <li className="botheader__nav_item">
                        <a href="#">Вклады</a>
                    </li>
                    <li className="botheader__nav_item">
                        <a href="#">Обмен валют</a>
                    </li>
                    <li className="botheader__nav_item">
                        <a href="#">Карты</a>
                    </li>
                    <li className="botheader__nav_item">
                        <a href="#">Ипотека</a>
                    </li>
                    <li className="botheader__nav_item">
                        <a href="#">Переводы</a>
                    </li>
                    <li className="botheader__nav_item">
                        <a href="#">Страхование</a>
                    </li>
                    <li className="botheader__nav_item">
                        <a href="#">Страхование</a>
                    </li>
                    <li className="botheader__nav_item">
                        <a href="#">Сервисы</a>
                    </li>
                    <ArrowDownIcon/>
                </ul>
                </div>
            <div className="botheader__buttons">
                <div className="botheader__buttons_call">
                    <PhoneIcon/>
                    <a href="#">Заказать звонок</a>
                </div>
                <div className="botheader__buttons_login">
                    <LoginIcon/>
                    <a href="#">Интернет-банк</a>
                </div>
            </div>
        </nav>
)

const TabletView = () => (
    <nav className="botheader">
            <div className="botheader__logo">
                <img src={logo} alt="logo"/>
                <div className="botheader__buttons">
                    <div className="botheader__buttons_call">
                        <PhoneIcon/>
                        Заказать звонок
                    </div>
                    <div className="botheader__buttons_login">
                        <LoginIcon/>
                        Интернет-банк
                    </div>
                    <MenuIcon/>
                </div>
            </div>
            <ul className="botheader__nav">
                <li className="botheader__nav_item">
                    <a href="#">Кредиты</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Вклады</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Обмен валют</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Карты</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Ипотека</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Ещё</a>
                </li>
                <ArrowDownIcon/>
            </ul>
            
        </nav>
)

const MobileView = () => (
    <nav className="botheader">
            <div className="botheader__logo">
                <img src={logo} alt="logo"/>
                <MenuIcon/>
            </div>
            <ul className="botheader__nav">
                <li className="botheader__nav_item">
                    <a href="#">Кредиты</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Вклады</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Обмен валют</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Карты</a>
                </li>
                <li className="botheader__nav_item">
                    <a href="#">Ипотека</a>
                </li>
            </ul>
            <div className="botheader__buttons">
                <div className="botheader__buttons_call">
                    <PhoneIcon/>
                    Заказать звонок
                </div>
                <div className="botheader__buttons_login">
                    <LoginIcon/>
                    Интернет-банк
                </div>
            </div>
        </nav>
)

export default BotHeader;