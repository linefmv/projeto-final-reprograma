import Weather from './helloWether/Weather/Weather.js';
import PromptSync from 'prompt-sync';
import dotenv from "dotenv";
dotenv.config();

const prompt = PromptSync();

function returnDataToUser() {
    const city = prompt('Digite o nome da sua Cidade:');
    const formattedCep = new Weather(city);
    formattedCep.getWeather();     
}

console.log(returnDataToUser());