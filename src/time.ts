const request = require("request");

const apiUrl = "http://api.timezonedb.com/v2.1/get-time-zone"; // timezonedb api key
const apiKey = "BZMIL84LXIJB";
const apiBy = "position";

export default class Time {
    public lat: number;
    public lng: number;
    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
    public get(onSuccess: any) {
        request(
            `${apiUrl}?key=${apiKey}&by=${apiBy}&lat=${this.lat}&lng=${this.lng}&format=json`,
            (error: any, response: any, body: any) => {
            if (error && response.statusCode !== 200) {
                throw error;
            }
            onSuccess(JSON.parse(body));
        });
    }
}
