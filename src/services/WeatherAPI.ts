class WeatherAPIService {
    static async getWeather(latitude?: number, longitude?: number) {
        let fetchData;

        try {
            if (latitude && longitude) {
                fetchData = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${
                        process.env.WEATHER_API_KEY
                    }&q=${latitude + "," + longitude}&aqi=no`,
                    { next: { revalidate: 600 } }
                );
            } else {
                fetchData = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=London&aqi=no`,
                    { next: { revalidate: 600 } }
                );
            }
        } catch (error) {
            console.error(error);
        }

        return fetchData?.json();
    }

    static async getLocation() {
        return new Promise(async (resolve, reject) => {
            try {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const weatherData = await this.getWeather(
                            latitude,
                            longitude
                        );
                        resolve(weatherData);
                    },
                    (error) => {
                        console.error(error.message);
                        resolve(this.getWeather());
                    }
                );
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    }
}

export default WeatherAPIService;
