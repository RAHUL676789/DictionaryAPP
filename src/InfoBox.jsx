
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import Typography from '@mui/material/Typography';
import "./infoBox.css"

export default function InofBox({jsonResult}){

  let Init_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Cold_URL ="https://images.unsplash.com/photo-1519863436079-8436f74be632?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Hot_URl = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Rain_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return (
<div className="InfoBox">

         
    
<div className='Card'>


    
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={jsonResult.humidity > 80 ? Rain_URL: jsonResult.tempMax >  25 ? Hot_URl : Cold_URL  }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {  jsonResult.humidity > 80 ? <AcUnitIcon/> : jsonResult.tempMax >25 ?  <WbSunnyOutlinedIcon/> : <ThunderstormOutlinedIcon/>  } &nbsp; &nbsp; {jsonResult.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>

            <p>temperature={jsonResult.temp} &deg;C</p>
            <p>temperatureMin={jsonResult.tempMin} &deg;C</p>
            <p>temperatureMax={jsonResult.tempMax} &deg;C</p>
            <p>humidity={jsonResult.humidity}</p>
            <p>temperature feelsLike={jsonResult.feelsLike} &deg;C</p>
            <p>the weather can be decribe as {jsonResult.weather} and feelsLike like {jsonResult.feelsLike} &deg;C</p>
        
        </Typography>
      </CardContent>
      
    </Card>

 </div>

 </div>
    )
}