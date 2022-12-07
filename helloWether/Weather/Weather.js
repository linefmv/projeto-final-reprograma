import fetch from 'node-fetch';
import dotenv from "dotenv";
dotenv.config();

class Weather {
    constructor(city) {
        this.city = city;
    }

    async callApiTransformCityInLatAndLog() {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.city}&key=${process.env.SUBSCRIPTION_GEOLOCATION_API_KEY}`);
        const data = await response.json();
        return data
    }

    async callApiWheter() {
        const callFunction = await this.callApiTransformCityInLatAndLog();

        const lat = callFunction.results[0].geometry.location.lat;
        const long = callFunction.results[0].geometry.location.lng;

        const api = await fetch(`https://atlas.microsoft.com/weather/severe/alerts/json?api-version=1.0&query=${lat},${long}&subscription-key=${process.env.SUBSCRIPTION_API_KEY}`);
        const data = await api.json();
        return data;
    }

}

const weather = new Weather('Santa Catarina');
console.log(weather.callApiWheter());