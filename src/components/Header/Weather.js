import React, {useState, useEffect} from 'react'
import axios from 'axios'

//const API= `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_ACCESS_KEY}&query=Dhaka`

export default function Weather() {
    const [weather, setWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=${process.env.REACT_APP_WEATHER_ACCESS_KEY}`
    useEffect( ()=>{
        setIsLoading(true)
        const getData = async () =>{
            const response = await axios.get(url);
            setWeather(response.data);
            setIsLoading(false);
        }
        getData()

    }, []);

   if(isLoading){
       return(
           <div>
               <p> wait, loading!</p>
           </div>
       )
   }

    return (
        <div>
            <p>
                Currently, in {weather.name} is {(Math.round(weather.main.temp))} degrees
                and it feels like {Math.round(weather.main.feels_like)}
            </p>
        </div>
    )
}
 