class WeatherCep {
  constructor(cep) {
    this.cep = cep;
  }

  formatCep() {
    const checkIfHasLetterRegex = /[a-zA-Z]/g;
    const checkIfHasLetterRegexResult = checkIfHasLetterRegex.test(this.cep) === true;

    if (checkIfHasLetterRegexResult) {
      return 'Hmm... Acho que tem uma letra no seu cep. Tente novamente, por favor.';
    }
    if (this.cep.length >= 9 || this.cep.length <= 7) {
      return 'Olá, o cep deve conter oito número. Tente novamente, por favor :D';
    }
    else {
      return 'CEP: ' + this.cep;
    }
  }
}

export default WeatherCep;