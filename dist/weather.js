"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const weatherApiUrl = "http://api.openweathermap.org/data/2.5/weather";
const weatherAppID = "9fe30b09f7e7460c40db95f622682c10";
const units = "metric";
class Weather {
    constructor(loc, type) {
        this.loc = loc;
        this.type = type;
    }
    get(onSuccess) {
        let locq;
        if (this.type === "zip") {
            locq = "zip=" + this.loc;
        }
        else {
            locq = "q=" + this.loc;
        }
        request(`${weatherApiUrl}?${locq}&units=${units}&appid=${weatherAppID}`, (error, response, body) => {
            if (error && response.statusCode !== 200) {
                throw error;
            }
            onSuccess(JSON.parse(body));
        });
    }
}
exports.default = Weather;
