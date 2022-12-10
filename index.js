import Weather from './src/helloWether/Weather/Weather.js';
import PromptSync from 'prompt-sync';
import dotenv from "dotenv";
dotenv.config();

const prompt = PromptSync({
    sigint: true
});



function returnDataToUser() {
    console.log('\x1b[36m%s\x1b[0m',`
  _-. _:::::::::::::::::::::::::::::::::::::::.:::::
 (    ) ),--.:::::::::::::::::::::::::::::::::::.:::
             )-._:::::::::::::::::::::::::::::::::::
_________________)::::::::::::::::::::::::::::::::::
    Olá, seja bem vindo ao Hello Weather!:::::::::::
\x1b[33m Veja se há alerta metereológico na sua cidade::::::\n`);

    const city = prompt('Por favor, digite o nome da sua Cidade:');
    const formattedCep = new Weather(city);
    formattedCep.formatCity();

    return formattedCep.getWeather();
}

returnDataToUser();