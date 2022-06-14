import { useState, useEffect} from "react";

function CountriesSearch({ setSearchParams, searchParams }) {
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }
    
    useEffect(() => {
        if (input.length) {
            setSearchParams({ filter: input })
        }
        if (!input.length) {
            setSearchParams({})
        }
    }, [input])

    return (
        <input onChange={handleChange} />
    )
}

export default CountriesSearch;