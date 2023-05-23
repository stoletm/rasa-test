import { useState } from 'react';
import {LocationIcon} from '../SVG/SVG'
import useResolution from '../../hooks/useResolution'
import './TopHeader.scss'

const TopHeader = () => {

    const {isDesktop} = useResolution();

    return (
        <>
            {isDesktop ? <DesktopView/> : <MobileTabletView/>}
        </>
    )
}

const MobileTabletView = () => {
    return (
        <div className="topheader">
            <div className="topheader__switcher">
                <a href="#" className="topheader__switcher_item active">
                    Частным клиентам
                </a>
                <a href="#" className="topheader__switcher_item">
                    Для бизнеса
                </a>
            </div>
        </div>
    )
}

const DesktopView = () => {
    
    const [hovered, setHovered] = useState(false);

    return (
        <div className="topheader">
            <div className="topheader__left">
                <div className="topheader__switcher">
                    <a href="#" className="topheader__switcher_item active">
                        Частным клиентам
                    </a>
                    <a href="#" className="topheader__switcher_item">
                        Для бизнеса
                    </a>
                </div>
                    <div className="topheader__about">
                        <div className="topheader__about_item">
                            <a href="#">О банке</a>
                        </div>
                        <div className="topheader__about_item">
                            <a href="#">Офисы</a>
                        </div>
                    </div>
            </div>
                <div className="topheader__right">
                    <div className="topheader__tel">
                        <a href="tel:8(800)775-56-06">8 (800) 775-56-06</a>
                    </div>
                    <div 
                        className="topheader__location" 
                        onMouseEnter={()=>setHovered(!hovered)} 
                        onMouseLeave={()=>setHovered(!hovered)} 
                        >
                        <LocationIcon color={hovered ? 'blue' : "#0D0D0D"}/>
                        Хабаровск
                    </div>
                    <div className="topheader__language">English</div>
                </div>
        </div>
    )
}

export default TopHeader;