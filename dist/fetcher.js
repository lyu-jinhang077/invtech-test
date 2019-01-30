"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = __importDefault(require("./time"));
const weather_1 = __importDefault(require("./weather"));
class Fetcher {
    constructor(loc) {
        this.loc = loc;
    }
    fetch(onFinish) {
        const numReg = /\d+/;
        let type;
        if (numReg.test(this.loc)) {
            type = "zip";
        }
        else {
            type = "name";
        }
        new weather_1.default(this.loc, type).get((res) => {
            if (res && res.cod === 200) {
                console.log(`\n\n-----------\nLocation: ${res.name}\nWeather: ${res.weather[0].description}`);
                new time_1.default(res.coord.lat, res.coord.lon).get((res2) => {
                    if (res2 && res2.status === "OK") {
                        console.log(`Time: ${res2.formatted}`);
                    }
                    else {
                        console.log("Time: failed to fetch");
                    }
                    onFinish();
                });
            }
            else {
                console.log(`Failed to fetch data: ${this.loc}`);
                onFinish();
            }
        });
    }
}
exports.default = Fetcher;
