import axios from "axios";
import { useContext, useEffect } from "react";
import CountriesContext from "../context/CountriesContext";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { spacesToHyphens } from '../utils'

export default function CountriesList() {
    const { data, setData } = useContext(CountriesContext)

    const getCountries = async () => {
        const result = await axios.get(`https://restcountries.com/v3.1/all`)
        setData({
            isLoaded: true,
            countries: result.data
        })
    }

    const ShowCountries = () => {
        return (
            <section className="countries">
                {data.countries.map((country, index) => {
                    return(
                        <Link to={`/detail/${spacesToHyphens(country.name.common)}`} key={index} className="country">
                            <img className="country__flag" src={country.flags.png}></img>
                            <p className="country__name">{country.name.common}</p>
                        </Link>
                    )
                })}
            </section>
        )
    }

    useEffect(() => {
        getCountries()
    }, [])


    return (
        <ShowCountries />
    )
}