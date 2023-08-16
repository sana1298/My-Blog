import React, { useEffect, useState } from 'react'

const Weather = () => {
    const[weather,setWeather]=useState("")
    const[data,setData]=useState([])
    const [triger, setTriger] = useState(false)

    // function fetchWeatherData(){
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=c7a9299a3d8da1d910da08bcffb48a3b`)
    // .then((response) =>response.json())
    // .then((data) =>{setData(data)})
    //  console.log(data)
    // }
    
function fetchWeatherData(){
    setTriger(!triger)
}
useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=c7a9299a3d8da1d910da08bcffb48a3b`)
    .then((response) =>response.json())
    .then((data) =>{setData(data)})
     console.log(data)
 },[triger])

  return (
    <>
    <div>
         <h1>Weather Application</h1>
      <input
        type="text"
        placeholder="Enter city name"
        // value={city}
        onChange={(e) => setWeather(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
    </div>
    {data.cod===200?(
        <div>
            <h2>Weather in: {data.name}</h2>
            <p>Temperature: {data.main?.temp}</p>
            <p>Humidity: {data.main?.humidity}</p>
            <p>Pressure:{data.main?.pressure}</p>
        </div>
    ):(<div>
        <h2>{data.message}</h2>
    </div>
    )}
    
    </>
  )
}

export default Weather
