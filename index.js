import Weather from './src/helloWether/Weather/Weather.js';
import PromptSync from 'prompt-sync';
import dotenv from "dotenv";
dotenv.config();

const prompt = PromptSync({
    sigint: true
});



function returnDataToUser() {
    const welcome = '\n Olá, seja bem vindo ao Hello Weather! \n';
    console.log(`
  _-. _:::::::::::::::::::::::::::::::::::::::.:::::
 (    ) ),--.:::::::::::::::::::::::::::::::::::.:::
             )-._:::::::::::::::::::::::::::::::::::
_________________)::::::::::::::::::::::::::::::::::
    Olá, seja bem vindo ao Hello Weather!:::::::::::
Veja se há alerta metereológico na sua cidade:::::::\n`);

    const city = prompt('Por favor, digite o nome da sua Cidade:');
    const formattedCep = new Weather(city);
    formattedCep.formatCity();

    return formattedCep.getWeather();
}

returnDataToUser();