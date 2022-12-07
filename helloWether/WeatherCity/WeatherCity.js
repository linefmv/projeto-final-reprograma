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

    const city = checkErrorInString(this.city);

    if (city.length === 0) {
      return 'Ops! Não conseguimos identificar a sua cidade, tente novamente!';
    } if (city.length > 0 && city.length <= 3) {
      return `A cidade que você digitou é: ${city}`;
    } else {
      return 'Ops! Não conseguimos identificar a sua cidade, tente novamente!';
    }
  }
}

export default WeatherCity;
