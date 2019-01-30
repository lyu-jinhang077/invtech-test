"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const apiUrl = "http://api.timezonedb.com/v2.1/get-time-zone"; // timezonedb api key
const apiKey = "BZMIL84LXIJB";
const apiBy = "position";
class Time {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    get(onSuccess) {
        request(`${apiUrl}?key=${apiKey}&by=${apiBy}&lat=${this.lat}&lng=${this.lng}&format=json`, (error, response, body) => {
            if (error && response.statusCode !== 200) {
                throw error;
            }
            onSuccess(JSON.parse(body));
        });
    }
}
exports.default = Time;
