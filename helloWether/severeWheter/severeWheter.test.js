import WeatherCep from "./SevereWeather";

describe("FormatCep", () => {
  it("should return message try again if cep contains letters", () => {
    const cep = '123a5678';
    const formattedCep = new WeatherCep(cep);
    expect(formattedCep.formatCep()).toMatch("Hmm... Acho que tem uma letra no seu cep. Tente novamente, por favor.");
  });
  it("should return cep, if correct", () => {
    const cep = '12345678';
    const formattedCep = new WeatherCep(cep);
    expect(formattedCep.formatCep()).toEqual("CEP: 12345678");
  }
  );
  it("should return message try again if cep has more than 8 numbers", () => {
    const cep = '123456789';
    const formattedCep = new WeatherCep(cep);
    expect(formattedCep.formatCep()).toMatch("Olá, o cep deve conter oito número. Tente novamente, por favor :D");
  }
  );
  it("should return message try again if cep has less than 8 numbers", () => {
    const cep = '1234567';
    const formattedCep = new WeatherCep(cep);
    expect(formattedCep.formatCep()).toEqual("Olá, o cep deve conter oito número. Tente novamente, por favor :D");
  }
  );
});
