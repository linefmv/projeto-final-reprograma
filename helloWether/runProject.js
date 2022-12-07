import WeatherCity from './WeatherCity/WeatherCity.js';
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

function returnDataToUser() {
    const city = prompt('Digite o nome da sua Cidade:');
    const formattedCep = new WeatherCity(city);
    return formattedCep.formatCity();
}

console.log(returnDataToUser());
