import { useState } from 'react';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Bestsellers from '../Bestsellers/Bestsellers';
import SearchForm from '../SearchFrom/SearchForm';
import CarsGrid from '../CarsGrid/CarsGrid';
import Footer from '../Footer/Footer';
import ApplicationForm from '../ApplicationForm/ApplicationForm';
import Conditions from '../Conditions/Conditions';
import FAQ from '../FAQ/FAQ';

import './App.scss';

const App = () => {

    const [listOpened, setListOpened] = useState(true);

    const onListToggle = () => {
        setListOpened(listOpened => !listOpened);
    }

    return (
        <div className="app">
            <Header/>
            <main>
                <Banner/>
                <SearchForm onListToggle={onListToggle} listOpened={listOpened}/>
                {listOpened
                    ? <>
                        <Bestsellers/>
                        <CarsGrid/>
                    </>: null}
                <ApplicationForm/>
                <Conditions/>
                <FAQ/>
            </main>
            <Footer/>
        </div>
    )
    
}

export default App;

