import {gridData as data} from '../../resources/test-data/data';
import useResolution from '../../hooks/useResolution';
import useRenderItems from '../../hooks/useRenderItems';

import CarCard from '../CarCard/CarCard';

import './CarsGrid.scss';


const CarsGrid = () => {

    const {isMobile, isTablet, isDesktop} = useResolution()

    const itemsToRender = isMobile ? 3 : isTablet ? 6 : null;
    const items = useRenderItems(data, CarCard, itemsToRender);
 
    return (
        <>
            <div className="carsgrid">
                {items}
                {!isDesktop
                    ? <button className="showcars">
                        Показать все машины
                    </button>
                    : null}
            </div>
        </>
    )
}


export default CarsGrid;