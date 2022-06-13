import axios from "axios";
import { useContext, useEffect } from "react";
import CountriesContext from "../context/CountriesContext";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { spacesToHyphens } from '../utils'


export default function CountriesList() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const { data, setData } = useContext(CountriesContext)

    const getCountries = async () => {
        const result = await axios.get(`https://restcountries.com/v3.1/all`)
        setData({
            isLoaded: true,
            countries: result.data
        })
    }

    function CountriesSearch() {
        const handleChange = e => {
            const search = `${searchParams.get('filter')}${e.target.value}`
            setSearchParams({filter: search})
        }
    
        return (
            <input type="text" onChange={handleChange}/>
        )
    }

    useEffect(() => {
        getCountries()
    }, [])


    return (
        <section className="input">
            <CountriesSearch />
            <section className="countries">
                {data.countries
                .filter(country => country.name.common.includes(searchParams.get('filter')))
                .map((country, index) => {
                    return (
                        <Link to={`/detail/${spacesToHyphens(country.name.common)}`} key={index} className="country">
                            <img className="country__flag" src={country.flags.png}></img>
                            <p className="country__name">{country.name.common}</p>
                        </Link>
                    )
                })}
            </section>
        </section>
    )
}