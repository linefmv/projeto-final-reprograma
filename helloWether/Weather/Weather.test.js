import Weather from "./Weather.js";

describe("get city name in Google Api", () => {
    it("should return city name", () => {
        const city = new Weather('São Paulo');
        expect(city.callApiTransformCityInLatAndLog()).toMatch("São Paulo");
    });
});
