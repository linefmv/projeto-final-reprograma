import WeatherCity from '../WeatherCity/WeatherCity.js';
import fetch from 'node-fetch';
import dotenv from "dotenv";
dotenv.config();
import translate from "translate";

translate.engine = "google";

class Weather extends WeatherCity {
    constructor(city) {
        super(city);
    }

    async callApiTransformCityInLatAndLog() {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.city}&key=${process.env.GOOGLE_KEY}`);
        const data = await response.json();
        return data;
    }

    async callApiWheter() {
        const callFunction = await this.callApiTransformCityInLatAndLog();

        if (callFunction.status === 'ZERO_RESULTS') {
            console.log('Ops! Nós não conseguimos identificar a sua cidade, tente novamente!');
        } else {
            const lat = callFunction.results[0].geometry.location.lat;
            const long = callFunction.results[0].geometry.location.lng;

            const api = await fetch(`https://atlas.microsoft.com/weather/severe/alerts/json?api-version=1.0&query=${lat},${long}&language={pt-BR}&subscription-key=${process.env.MICROSOFT_KEY}`);
            const data = await api.json();
            return data;
        }
    }

    async getWeather() {

        const getLocalWeather = await this.callApiWheter()

        const newObj = {};
        const getInfos = getLocalWeather.results.map((item) => {
            newObj.level = item.level;
            newObj.source = item.source;
            newObj.description = item.description.localized;
            newObj.city = item.alertAreas[0].name;
            newObj.latestStatus = item.alertAreas[0].latestStatus.localized;
            newObj.alertDetails = item.alertAreas[0].alertDetails;

            return newObj;
        });

        const translateDescription = await translate(newObj.description, "pt");
        const translateLevel = await translate(newObj.level, "pt");
        const translateStautsOfAlert = await translate(newObj.latestStatus, "pt");


        if (newObj.level) {
            console.log('Atenção! Foi emitido um alerta', translateLevel, 'para a sua cidade:', translateDescription, '\n', '\n', 
            newObj.alertDetails, '\n', '\n', '- Fonte: ' + newObj.source, '\n', '- Status da emissão do alerta: ' + translateStautsOfAlert);
        } else {
            console.log('Ainda não foi emitido nenhum alerta para a sua cidade');
        }

        return getInfos
    }
}
export default Weather;