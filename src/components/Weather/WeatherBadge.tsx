"use client";
import WeatherAPI from "@/services/WeatherAPI";
import { useEffect, useState } from "react";
import styles from "@/styles/weather/weather.module.scss";
import Image from "next/image";
import loader from "@/styles/loader/loader.module.scss"

const WeatherBadge = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await WeatherAPI.getLocation();
            setData(data);
        };
        fetchData();
    }, []);

    return data ? (
        <div className={styles.container}>
            <Image
                unoptimized
                alt="weather image"
                src={"https:" + data.current.condition.icon}
                width={120}
                height={120}
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
        <div className={loader.loader_badge_container}>
            <span className={loader.loader} />
        </div>
    );
};

export default WeatherBadge;
