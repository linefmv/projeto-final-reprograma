import Weather from "./Weather.js";
import fetch from 'node-fetch';
import api from '../../mocks/api.json';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(api)
}));

describe("return city by google api", () => {
    it("should return city formated in new pattern", async () => {
        const formattedCity = new Weather('São Paulo');
        const response = await formattedCity.callApiTransformCityInLatAndLog();
        expect(response.status).toEqual('OK');
    });
    it("should return weather informations about the city", async () => {
        const formattedCity = new Weather('Porto Alegre');
        const response = await formattedCity.callApiWheter();
        expect(response.results[0].level).toEqual('Moderate'); // pode alterar
    });
});
