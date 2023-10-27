import { useState, useEffect } from 'react'
import axios from 'axios'

const Coutries = ({countries,setShowCountry}) => {
  return (
    <div>
       <ul>
      {countries.map((country,id) => (
            <li key={id}>{country.name.common} <button onClick={()=> setShowCountry(country)}>Show</button></li>
        ))}
        </ul>
    </div>
  )
}

const CountryDetails = ({country}) =>{
  const [weather, setWeather] = useState(null)
  const capital_city = country.name.common
  const api_key = import.meta.env.VITE_WEATHER_API_KEY
  const address = `https://api.openweathermap.org/data/2.5/weather?q=${capital_city}&appid=${api_key}`
  const temperature = weather?.main?.temp
  const temperatureCelsius = (temperature - 273.15).toFixed(2)
  
  useEffect(()=>{
    axios.get(address)
    .then((response) => {
      setWeather(response.data)
     
    
  })
  },[address])

  const icon = weather?.weather?.[0]?.icon;
  const iconImage = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : undefined

  return (
    <div>
     
      <h1>{country.name.common}</h1>
        <p>Capital city: {country.capital}</p>
        <p>Area:{country.area}</p>
        <h3>Languages:</h3>
        <ul>
       
        {Object.entries(country.languages).map(([langcode,language]) => {
          return (
          <li key={langcode}>{language}</li>)
      
        })}
        <div className='flag'>{country.flag}</div>
         
        </ul>
        <div>
          <h2> Weather in {country.capital}</h2>
          {temperatureCelsius !== null &&  (
        <p>Temperature: {temperatureCelsius} °Celcius</p>
        
      )}
       {icon && (
      <img
    src={iconImage}
    alt="Weather Icon"
    />
    )}
     
     {weather?.wind?.speed && (
    <p>Wind: {weather.wind.speed} m/s</p>
)}

        </div>
    </div>
  )
}

function App() {
  const [countries,setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [showCountry, setShowCountry] = useState(null);
  
useEffect(()=> {
  axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
  .then((response) => {
  setCountries(response.data)
});
},[]);


const listOfFilteredCountries = countries.filter((country) => {
  return country.name.common.toLowerCase().includes(filter.toLowerCase())
   
});
const handleFilteredCountries = (event) => {
  setFilter(event.target.value)
  setShowCountry(null)
}


  return (
    <>
    
    Find coutries:
    <input 
    type='text'
    onChange={handleFilteredCountries} 
    value={filter}
    />
    {listOfFilteredCountries.length > 10 ?
    ( 
    <p>Too many matches specify another filter</p> 
    ) : 
      listOfFilteredCountries.length === 1 ? (
        <CountryDetails country={listOfFilteredCountries[0]}/>
        ) : (
          showCountry ? (
            <CountryDetails country={showCountry} />
          ) : (
    <Coutries countries={listOfFilteredCountries} setShowCountry={setShowCountry} showCountry={showCountry} />
    )
    )}
    </>
  )
}

export default App
