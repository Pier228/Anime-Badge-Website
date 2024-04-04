import styles from "@/styles/weather/weather.module.scss";
import Image from "next/image";
import useWeatherData from "@/hooks/useWeatherData";
import Loader from "../Loader/Loader";

const WeatherBadge = () => {
    const data = useWeatherData();

    return data ? (
        <div className={styles.container}>
            <Image
                unoptimized
                alt="weather image"
                src={"https:" + data.current.condition.icon}
                width={110}
                height={110}
                className={styles.weather_image}
            />
            <h2>
                {data.current.temp_c} C ({data.current.temp_f} F)
            </h2>
            <h2 className={styles.secondary_text}>{data.location.name}</h2>
            <div className={styles.footer}>
                <div className={styles.data_container}>
                    <Image
                        src="/images/wind.svg"
                        alt="wind icon"
                        width={27}
                        height={27}
                    />
                    <h3>{data.current.wind_kph} km/h</h3>
                </div>
                <div className={styles.data_container}>
                    <h3>{data.current.humidity} </h3>
                    <Image
                        src="/images/humidity.svg"
                        alt="humidity icon"
                        width={27}
                        height={27}
                    />
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    );
};

export default WeatherBadge;
