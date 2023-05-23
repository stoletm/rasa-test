import './CarCard.scss'

const CarCard = (props) => {
    const {img, price, city, title} = props.data;

    return (
        <div className="autocard">
            <a href="#" className="autocard__image">
                <img src={img} alt="" height={200}/>
            </a>
            <div className="autocard__content">
                <div className="autocard__content_title">{title}</div>
                <div className="autocard__content_city">{city}</div>
                <div className="autocard__content_prices price">
                    <div className="price_price">{price} ₽</div>
                    <div className="price_link">
                        <a href="#">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarCard;