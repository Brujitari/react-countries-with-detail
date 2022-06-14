import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import CountriesContext from './context/CountriesContext';
import './App.sass';
import Index from './pages/AllCountries'
import CountryDetail from './pages/CountryDetail';
import PathNotFound from './pages/PathNotFound'

function App() {

  const [data, setData] = useState({
    isLoaded: false,
    countries: []
  })

  return (
    <div className="App">
      <CountriesContext.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/detail/:countryName' element={<CountryDetail />}/>
            <Route path='/' element={<Index />} />
          </Routes>
        </BrowserRouter>
      </CountriesContext.Provider>
    </div>
  );
}
//            <Route path='*' element={<PathNotFound />} />
export default App;
