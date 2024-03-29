import WeatherAPI from "@/services/WeatherAPI";
import { useEffect, useState } from "react";

const useWeatherData = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const data = await WeatherAPI.getLocation();
            setData(data);
        })();
    }, []);

    return data;
};

export default useWeatherData;
