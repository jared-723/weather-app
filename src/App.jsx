import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import Weather from './components/Weather'

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null)

  const bgChange = 
    {
      "01d": 'bg-[url(/img/bg1.jfif)]',
      "02d": 'bg-[url(/img/bg2.jfif)]',
      "03d": 'bg-[url(/img/bg3.jfif)]',
      "04d": 'bg-[url(/img/bg4.jfif)]',
      "09d": 'bg-[url(/img/bg6.jfif)]',
      "10d": 'bg-[url(/img/bg6.jfif)]',
      "11d": 'bg-[url(/img/bg9.jfif)]',
      "13d": 'bg-[url(/img/bg7.jfif)]',
      "50d": 'bg-[url(/img/bg4.jfif)]',
      "01n": 'bg-[url(/img/bg1.jfif)]',
      "02n": 'bg-[url(/img/bg2.jfif)]',
      "03n": 'bg-[url(/img/bg3.jfif)]',
      "04n": 'bg-[url(/img/bg4.jfif)]',
      "09n": 'bg-[url(/img/bg6.jfif)]',
      "10n": 'bg-[url(/img/bg6.jfif)]',
      "11n": 'bg-[url(/img/bg9.jfif)]',
      "13n": 'bg-[url(/img/bg7.jfif)]',
      "50n": 'bg-[url(/img/bg4.jfif)]'
    }

  const handleBgChange = (bg, obj) => {
    let wI= ""
    for (const key in obj) {
      if(key == bg){
        wI = obj[key]
      }
    }
    return wI
  }

  const bg1 = handleBgChange(weatherInfo?.weather[0].icon , bgChange)

  const success = (pos) =>{
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const API_KEY = "e6479d3ee8d41c6d00dc508e2ba4da2c"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  axios.get(url)
  .then(({data}) =>setWeatherInfo(data))
  .catch((err) => console.log(err))

  }

  useEffect(() =>{
    navigator.geolocation.getCurrentPosition(success);
    ;
  }, [])


  return (
    <>
    <main className={weatherInfo && `min-h-screen ${bg1} text-white flex justify-center items-center pl-3 pr-3`}>
      <Weather weatherInfo={weatherInfo}/>
    </main>
    </>
  )
}

export default App
