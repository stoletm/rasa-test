
import { ArrowDownIcon, ArrowUpIcon } from '../SVG/SVG';
import './SearchForm.scss';

const SearchForm = (props) => {

    const {onListToggle, listOpened} = props;

    return (
        <div className="searchform">
            <div className="searchform__header">
                <div className="searchform__title">
                    Выберите себе авто
                </div>
                <button className="searchform__collapse" onClick={() => onListToggle()}>
                    {listOpened
                        ? <>
                            Свернуть список машин
                            <ArrowUpIcon/> 
                        </>
                        : <>
                            Развернуть список машин
                            <ArrowDownIcon color={'#760135'}/>
                        </>}
                </button>
            </div>
            <div className="searchform__filters">
                <div className="searchform__filters_row">
                    <div className="searchform__filters_model">
                        Марка
                        <select name="model">
                            <option value="">Выбрать</option>
                        </select>
                    </div>
                    <div className="searchform__filters_year">
                        Год
                        <select name="year">
                            <option value="">Выбрать</option>
                        </select>
                    </div>
                </div>
                <div className="searchform__filters_row">
                    <div className="searchform__filters_price">
                        Цена
                        <input type="text" placeholder="От"/>
                    </div>
                    <div className="searchform__filters_price">
                        <span>цена</span>
                        <input type="text" placeholder="До"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchForm;