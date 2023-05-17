import useResolution from '../../hooks/useResolution';

import { ArrowRightIcon } from '../SVG/SVG';

import './Banner.scss';

const Banner = () => {

    const {isMobile, isDesktop} = useResolution();
    const background = isMobile ? 'mobile' : isDesktop ? 'desktop' : 'tablet'

    return (
        <div className={`banner ${background}`}>
            {isDesktop || isMobile
                ? <ul className="banner__nav">
                    <li className="banner__nav_item"><a href="#">Главная</a></li>
                    <ArrowRightIcon color='#131313'/>
                    <li className="banner__nav_item"><a href="#">Кредит</a></li>
                    <ArrowRightIcon color='#131313'/>
                    <li className="banner__nav_item"><a href="#">Автокредит</a></li>
                </ul>
                : null}
            <div className="banner__text">
                <p className="banner__text_title">Автокредит от 7,5% годовых</p>
                <p className="banner__text_info">На покупку авто у дилера или частного лица</p>
            </div>
            {!isMobile ? <button className="banner__button">Оформить</button> : null}
        </div>
    )
}

export default Banner;