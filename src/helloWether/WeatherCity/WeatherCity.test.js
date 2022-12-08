import WeatherCity from "./WeatherCity.js";

describe("Format City name", () => {
  it("should return city formated in new pattern", () => {
    const formattedCity = new WeatherCity('São Paulo');
    expect(formattedCity.formatCity()).toMatch("saopaulo");
  });
  it("should return a message if city is a empty string", () => {
    const formattedCity = new WeatherCity('');
    expect(formattedCity.formatCity()).toMatch("Ops! Não conseguimos identificar a sua cidade, tente novamente!");
  }
  );
  it("should return message try again if cep has more than 8 numbers", () => {
    const formattedCity = new WeatherCity('Porto Alegre');
    expect(formattedCity.formatCity()).toMatch("A cidade que você digitou é: portoalegre");
  }
  );
});
