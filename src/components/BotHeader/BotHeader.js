
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
            <div className="botheader__logo">
                <img src={logo} alt="logo"/>
            </div>
            <ul className="botheader__nav">
                <li className="botheader__nav_item">Кредиты</li>
                <li className="botheader__nav_item">Вклады</li>
                <li className="botheader__nav_item">Обмен валют</li>
                <li className="botheader__nav_item">Карты</li>
                <li className="botheader__nav_item">Ипотека</li>
                <li className="botheader__nav_item">Переводы</li>
                <li className="botheader__nav_item">Страхование</li>
                <li className="botheader__nav_item">Страхование</li>
                <li className="botheader__nav_item">Сервисы</li>
                <ArrowDownIcon/>
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
                <li className="botheader__nav_item">Кредиты</li>
                <li className="botheader__nav_item">Вклады</li>
                <li className="botheader__nav_item">Обмен валют</li>
                <li className="botheader__nav_item">Карты</li>
                <li className="botheader__nav_item">Ипотека</li>
                <li className="botheader__nav_item">Ещё</li>
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
                <li className="botheader__nav_item">Кредиты</li>
                <li className="botheader__nav_item">Вклады</li>
                <li className="botheader__nav_item">Обмен валют</li>
                <li className="botheader__nav_item">Карты</li>
                <li className="botheader__nav_item">Ипотека</li>
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