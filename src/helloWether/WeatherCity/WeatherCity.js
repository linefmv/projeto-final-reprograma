class WeatherCity {
  constructor(city) {
    this.city = city;
  }

  formatCity() {
    function checkErrorInString(city) {
      const checkIfHaveNumbersInsideString = /\d/.test(city) ? city.replace(/\d/g, '') : city;
      const removeExtraSpaces = checkIfHaveNumbersInsideString.replaceAll(/\s/g, '');
      const checkIfHaveSpecialCharacterRemove = removeExtraSpaces.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();

      return checkIfHaveSpecialCharacterRemove;
    }

    const cityAfterCheckError = checkErrorInString(this.city);

    if (cityAfterCheckError.length === 0) {
      return 'Ops! Não conseguimos identificar a sua cidade, tente novamente!';
    } if (cityAfterCheckError.length >= 2) {
      return `A cidade que você digitou é: ${cityAfterCheckError}`;
    } else {
      return 'Ops! Não conseguimos identificar a sua cidade, tente novamente!';
    }
  }

}

export default WeatherCity;
