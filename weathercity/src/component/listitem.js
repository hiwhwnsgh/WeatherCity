import '../styled/Listitem.scss';
import { useState } from 'react';
const Listitem = ({ city,name }) => {
    const getImage = (imageType) => {
        const main = imageType.main;
        const description = imageType.description;
        if(main === 'Clouds'){
            if(description === 'few clouds' || description === "overcast clouds"){
                return <img src='cloud2.png' alt={description}/>
            }
            else{
                return <img src='cloud.png' alt={description}/>
            }
            
        }
        else if(main === 'Rain' || imageType === 'Drizzle'){
            return <img src='rain.png' alt={description}/>
        }
        else if(main === 'Thunderstorm'){
            return <img src='lightning.png' alt={description}/>
        }
        else if(main === 'Snow'){
            return <img src='snow.png' alt={description}/>
        }
        else if(main === 'Tornado' || main === 'Squall'){
            return <img src='tornado.png' alt={description}/>
        }
        else if(main === 'Fog' || main === 'Mist' || main === 'Smoke' || main ==='Haze'){
            return <img src='fog.png' alt={description}/>
        }
        else if(main ==='Dust' || main === 'Sand'){
            return <img src='dust.png' alt={description}></img>
        }
        else if(main === 'Ash'){
            return <img src='ash.png' alt={description}></img>
        }
        else{
            return <img src='clear.png' alt={description}/>
        }
    }
    return (
        <div className="item">
            <div>
            <h3>{name} </h3>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                {getImage(city.weather[0])}
                <h3>{Math.round(city.main.temp-273.15)}&ensp;°C</h3>
            </div>
            <p>습기 : {Math.round(city.main.humidity)}&ensp;%</p>
            <p>체감온도 : {Math.round(city.main.feels_like-273.15)}&ensp;°C</p>
            <p>설명 : {city.weather[0].description}</p>
            </div>
        </div>
      );
};

export default Listitem;