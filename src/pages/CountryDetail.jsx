import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountriesContext from "../context/CountriesContext"
import { spacesToHyphens, objPropertiesToStr, objValuesToStr } from '../utils'
import './CountryDetail.sass'

const CountryDetail = () => {
    const { data, setData } = useContext(CountriesContext)
    const { countryName } = useParams();

    const getOneCountry = async (country) => {
        const allCountries = await axios.get(`https://restcountries.com/v3.1/all`)
        console.log('paramsName: ', country, 'searchName:', spacesToHyphens(allCountries.data[3].name.common))
        const result = allCountries.data.filter(element => spacesToHyphens(element.name.common) === country)
        console.log('before: ', data, 'result: ', result)
        setData(({
            isLoaded: true,
            countries: result[0]
        }))
        console.log('after: ', data)
    }

    useEffect(() => {
        getOneCountry(countryName);
    }, [countryName]);

    const { name, flags, capital, region, languages, currencies } = data?.countries

    return (
        <section
            style={{ backgroundImage: `url(${flags?.png})`, backgroundSize: "cover", height: "100%" }}
            className="details"
        >
            <section className="info">
                <h2 className="info__name">
                    {name?.common}
                </h2>
                <ul className="info__rest">
                    <p>{`Capital:   ${objValuesToStr(capital)}`}</p>
                    <p>{`Region:   ${region}`}</p>
                    <p>{`Currencies:   ${objPropertiesToStr(currencies)}`}</p>
                    <p>{`Languages:   ${objValuesToStr(languages)}`}</p>
                </ul>
            </section>
        </section>
    );
};

export default CountryDetail;