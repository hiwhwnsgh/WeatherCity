import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styled/App.scss"
import axios from "axios";
import Listitem from "./component/listitem";

const App = () =>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const apiKey = '0bf7ebaeee3436efb1414877bb47c72f';
  const cities = ['Seoul', 'Gyeonggi-do', 'Incheon', 'Busan','Ulsan','Daegu','Daejeon','Gwangju','JeonJu','Yeosu','Mokpo','Jeju']; // 가져올 도시 리스트
  const krcities = ['서울','경기도','인천','부산','울산','대구','대전','광주','전주','여수','목포','제주']
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    Promise.all(
      cities.map(city =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      )
    )
      .then(responses => {
        const data = responses.map(response => response.data);
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
      <div className="App">
        <div className="Slidelist">
        <Slider {...settings}>
        {
          weatherData.map((city,index)=>(
            <Listitem key={index} city={city} name={krcities[index]}></Listitem>
          ))
        }
        </Slider>
        </div>
      </div>
  );
}
export default App;