import { ArrowRightIcon } from '../SVG/SVG';

import './Conditions.scss';

const Conditions = () => {

    return (
        <div className="conditions">
            <div className="conditions__title">Общие условия</div>
            <div className="conditions__item">
                <p className="conditions__item_title">
                    Срок    
                </p>
                <p className="conditions__item_text">
                    от 6 месяцев до 6 лет.
                </p>
            </div>
            <div className="conditions__item">
                <p className="conditions__item_title">
                    Сумма
                </p>
                <p className="conditions__item_text">
                    от 200 000 до 5 000 000 руб.
                </p>
            </div>
            <div className="conditions__item">
                <p className="conditions__item_title">
                    Годовая процентная  ставка:
                </p>
                <p className="conditions__item_text">
                    от 7,5 % *.
                </p>
            </div>
            <div className="conditions__item">
                <p className="conditions__item_title">
                    Возможность приобретения авто у частного лица
                </p>
            </div>
            <div className="conditions__link">
                <a href="#">Смотреть полные условия кредита</a>
                <ArrowRightIcon/>
            </div>
        </div>
    )
}

export default Conditions;