import useResolution from '../../hooks/useResolution';
import useSlider from '../../hooks/useSlider';
import { ArrowLeftIcon, ArrowRightIcon, LinkArrowIcon, BigArrowRightIcon, BigArrowLeftIcon } from '../SVG/SVG';
import './BestsellerCard.scss';

const BestsellerCard = (props) => {
    const {price, title, description, img} = props.data;

    const { isDesktop } = useResolution();

    const {onNext, onPrev, lastItem, firstItem, source} = useSlider(img)


    return (
        <div className="bestseller">
            <div className="bestseller__carousel">
                {isDesktop
                    ? <>
                        <button 
                            style={firstItem ? {visibility: 'hidden'} : null}
                            onClick={() => onPrev()}
                        >
                            <BigArrowLeftIcon/>
                        </button>
                            <a href="#">
                                <img src={source} alt="title" width={309}/>
                            </a>
                        <button 
                            style={lastItem ? {visibility: 'hidden'} : null}
                            onClick={() => onNext()}>
                            <BigArrowRightIcon/>
                        </button>
                    </>
                    : <>
                        <button 
                            style={firstItem ? {visibility: 'hidden'} : null}
                            onClick={() => onPrev()}>
                            <ArrowLeftIcon/>
                        </button>
                            <a href="#">
                                <img src={source} alt="title" width={256} />
                            </a>
                        <button 
                            style={lastItem ? {visibility: 'hidden'} : null}
                            onClick={() => onNext()}>
                            <ArrowRightIcon color="black"/>
                        </button>
                        
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
