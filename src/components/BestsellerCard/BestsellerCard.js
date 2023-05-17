import useResolution from '../../hooks/useResolution';
import { ArrowLeftIcon, ArrowRightIcon, LinkArrowIcon, BigArrowRightIcon } from '../SVG/SVG';
import './BestsellerCard.scss';

const BestsellerCard = (props) => {
    const {price, title, description, img} = props.data;

    const { isDesktop } = useResolution();

    return (
        <div className="bestseller">
            <div className="bestseller__carousel">
                {isDesktop
                    ? <>
                        <img src={img} alt="title" />
                        <BigArrowRightIcon/>
                    </>
                    : <>
                        <ArrowLeftIcon/>
                        <img src={img} alt="title" />
                        <ArrowRightIcon color="black"/>
                    </>
                }
            </div>
            <div className="bestseller__content">
                <div className="bestseller__text">
                    <p className="bestseller__text_info"><strong>Лучшее предложение</strong></p>
                    <p className="bestseller__text_title">{title}</p>
                    {!isDesktop ? null :
                        <p className="bestseller__text_description">{description}</p>
                    }
                </div>
                <div className="bestseller__prices">
                    <p className="bestseller__prices_price">от {price} ₽</p>
                    <a href="#" className="bestseller__prices_link">
                        подробнее
                        <LinkArrowIcon/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BestsellerCard;
