import WeatherCity from '../WeatherCity/WeatherCity.js';
import fetch from 'node-fetch';
import dotenv from "dotenv";
import translate from "translate";
dotenv.config();

translate.engine = "google";

class Weather extends WeatherCity {
    constructor(city) {
        super(city);
    }

    async transformCityNameInCoordinates() {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.city}&key=${process.env.GOOGLE_KEY}`);
        const data = await response.json();

        if (data.status === 'ZERO_RESULTS') {
            console.log('Ops! Nós não conseguimos identificar a sua cidade, tente novamente!');
        } else {
            return data
        };
    }

    async getCoordinates() {
        const callFunction = await this.transformCityNameInCoordinates();

        const lat = callFunction.results[0].geometry.location.lat;
        const long = callFunction.results[0].geometry.location.lng;

        const api = await fetch(`https://atlas.microsoft.com/weather/severe/alerts/json?api-version=1.0&query=${lat},${long}&language={pt-BR}&subscription-key=${process.env.MICROSOFT_KEY}`);
        const data = await api.json();

        return data;
    }

    async getWeather() {

        const getLocalWeather = await this.getCoordinates()

        const weatherInfo = {};
        const getInfos = getLocalWeather.results.forEach((item) => {
            weatherInfo.level = item.level;
            weatherInfo.source = item.source;
            weatherInfo.description = item.description.localized;
            weatherInfo.city = item.alertAreas[0].name;
            weatherInfo.latestStatus = item.alertAreas[0].latestStatus.localized;
            weatherInfo.alertDetails = item.alertAreas[0].alertDetails;

            return weatherInfo;
        });

        const translateDescription = await translate(weatherInfo.description, "pt");
        const translateLevel = await translate(weatherInfo.level, "pt");
        const translateStautsOfAlert = await translate(weatherInfo.latestStatus, "pt");


        if (weatherInfo.level) {
            return console.log('Atenção! Foi emitido um alerta', translateLevel, 'para a sua cidade:', translateDescription, '\n',
                '\n', weatherInfo.alertDetails, '\n', '\n', '- Fonte: ' + weatherInfo.source, '\n', '- Status da emissão do alerta: ' + translateStautsOfAlert)
        } else {
            console.log('Ainda não foi emitido nenhum alerta para a sua cidade');
        }
        return getInfos
    }
}
export default Weather;