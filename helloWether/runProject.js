import  WeatherCep from './severeWheter/SevereWeather.js';
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

const getCep = prompt('Digite o seu CEP:');

const formattedCep = new WeatherCep(getCep);
console.log(formattedCep.formatCep());