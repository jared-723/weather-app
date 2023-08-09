import { useState } from "react";

const Weather = ({weatherInfo}) => {

    const [celsiusTemp, setCelsiusTemp] = useState(true)

    const celcius = (temp)=>{
        return (temp - 273.15).toFixed(1);
    }

    const fahrenheit = (tempC) => {
        return(((tempC -273.15) * 9/5) + 32).toFixed(1);
    } 

    const handleUnitTemp = () => {
        setCelsiusTemp(!celsiusTemp)
    }

    const resultTempConversion = celsiusTemp ? celcius(weatherInfo?.main.temp) : fahrenheit (weatherInfo.main.temp)

    return (
        <section className="basis-[600px] flex flex-col items-center gap-4">

            <h2 className="text-2xl font-bold ">{weatherInfo?.name}</h2>

            <section className="grid gap-4 sm:grid-cols-[auto_auto]">

                {/* Seccion superior */}
                <section className="bg-white/40 p-2 rounded-2xl grid grid-cols-2 items-center text-center">
                    <h4 className="col-span-2 text-lg">{weatherInfo?.weather[0].description}</h4>
                    <span className="grid place-items-center text-[3.5rem]">{resultTempConversion}{celsiusTemp ? "C" : "F"}</span>
                    <div>
                        <img src= {`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" />
                    </div>
                </section>

                {/* Seccion inferior */}
                <section className="bg-white/40 rounded-2xl grid grid-cols-3 place-items-center p-6 text-lg sm:grid-cols-1">
                    <article className="flex items-center gap-2">
                        <div className="w-[18px]">
                            <img src="/img/wind.png" alt="" />
                        </div>
                        <span>{weatherInfo?.wind.speed} m/s</span>
                    </article>

                    <article className="flex items-center gap-2">
                        <div className="w-[18px]">
                            <img src="/img/humidity.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.humidity} %</span>
                    </article>

                    <article className="flex items-center gap-2">
                        <div className="w-[18px]">
                            <img src="/img/pressure.png" alt="" />
                        </div>
                        <span>{weatherInfo?.main.pressure} hPa</span>
                    </article>
                </section>

                <button onClick={handleUnitTemp} className="mt-4 bg-white/70 block m-auto px-6 py-2 rounded-lg sm:col-span-2">Cambiar a F</button>

            </section>
    
        </section>
    )
}
export default Weather