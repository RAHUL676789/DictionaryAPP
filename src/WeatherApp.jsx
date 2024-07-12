import { useState } from "react";
import InofBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherAPP(){


    let [weather,setWeather] = useState({
        city:"delhi",
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
        feelsLike:25.05

    })

    let updateInfo = (jsonResult)=>{

        setWeather(jsonResult);
    }
    return (
        <div className="Weather" style={{textAlign:"center"}}>

            <h1 style={{
                color:"#af345f",
                textDecorationLine:"underline"
               

            }}>Weather app  by delta</h1>

            <SearchBox updateInfo ={updateInfo}/>
            <InofBox jsonResult={weather}/>

        </div>
    )
}