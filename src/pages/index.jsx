import CountriesList from '../components/CountriesList';
import CountriesContext from '../context/CountriesContext';

export default function Index() {
    return (
        <section>
            <h1>COUNTRIES</h1>
            <CountriesContext.Provider value={{data, setData}}>
                <CountriesList/>    
            </CountriesContext.Provider>
        </section>
    )
}