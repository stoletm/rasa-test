import BestsellerCard from "../BestsellerCard/BestsellerCard";
import {bestsellersData as data} from '../../resources/test-data/data'
import useRenderItems from "../../hooks/useRenderItems";

const Bestsellers = () => {

    const items = useRenderItems(data, BestsellerCard);

    return(
        <div className="bestsellers">
            {items}
        </div>
    )
}

export default Bestsellers;