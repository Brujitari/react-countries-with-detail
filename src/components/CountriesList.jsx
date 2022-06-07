import axios from "axios";
import CountriesContext from "../context/CountriesContext";
import { useState } from "react";

export default function CountriesList() {
    const [{isLoaded, data}, setData] = useState({
        isLoaded: false,
        data: []
    })

    const getCountries = async () => {
        const result = await axios.get(`https://restcountries.com/v3.1/all`)
        setData({
            isLoaded: true,
            data: result.data
        })
    }
    console.log(getCountries())

    return (
        <ul>
            {getCountries().map(country => <li>{country.flag}</li>)}
        </ul>
    )
}