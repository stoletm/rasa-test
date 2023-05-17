import { useState } from 'react';
import {LocationIcon} from '../SVG/SVG'
import useResolution from '../../hooks/useResolution'
import './TopHeader.scss'

const TopHeader = () => {

    const {isDesktop} = useResolution();
    const [hovered, setHovered] = useState(false);

    return (
        <div className="topheader">
            <div className="topheader__left">
                <div className="topheader__switcher">
                    <div className="topheader__switcher_item active">Частным клиентам</div>
                    <div className="topheader__switcher_item">Для бизнеса</div>
                </div>
                {isDesktop ? 
                    
                    <div className="topheader__about">
                        <div className="topheader__about_item">О банке</div>
                        <div className="topheader__about_item">Офисы</div>
                    </div> : null}
            </div>
            {isDesktop ? 
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
                </div> : null} 
        </div>
    )
}

export default TopHeader;