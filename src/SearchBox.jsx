import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import Alert from '@mui/material/Alert';
import { useState } from 'react';




export default function SearchBox({updateInfo}){
let [city,setCity] = useState("")
let [error,setError] = useState(false);





let API_URL = "https://api.openweathermap.org/data/2.5/weather";
let API_KEY = "23002afcc9380997a1f085e9fc5019e5";

let getWeatherInfo = async(evt)=>{

    try{


   let result = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let data = await result.json();

   let jsonResult = {
         city:city,
         temp:data.main.temp,
         tempMin:data.main.temp_min,
         tempMax:data.main.temp_max,
         humidity:data.main.humidity,
         weather:data.weather[0].description,
         feelsLike:data.main.feels_like,
   }
   
  return await updateInfo(jsonResult);
}
catch(e){
    console.log(e);
    setError(true);
}

}


let handleInputChange = (evt)=>{
    
    setCity(evt.target.value)
}
    let handlesubmit = (evt)=>{
          evt.preventDefault();
          console.log(city);
          setCity("")
          setError(false);
    }

    return (
        <div className='SearchBox'>
            {error &&  <Alert severity="error">Data not found in the api</Alert>}
            <h3>Search for the weather</h3>
            
            <form onSubmit={handlesubmit}>
            <TextField
             id="city" label="city" 
             variant="outlined"
             required autoComplete='off'
             onChange={handleInputChange} 
             value={city}
            />
            <br /><br />
            <Button variant="contained" type='submit' onClick={getWeatherInfo}>Search</Button>
            </form>
        </div>
      
    )
}