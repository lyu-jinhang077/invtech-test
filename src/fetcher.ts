
import Weather from './weather';
import Time from './time';

export default class Fetcher {
    loc: any;
    constructor(loc:any) {
        this.loc = loc;
    }

    fetch(onFinish:any) {
        const numReg = /\d+/;
        let type;
        if(numReg.test(this.loc)) type = "zip";
        else type = "name";
        new Weather(this.loc, type).get((res:any)=>{
            if(res && res.cod === 200) {
                console.log(`\n\n-----------\nLocation: ${res.name}\nWeather: ${res.weather[0].description}`);
                new Time(res.coord.lat, res.coord.lon).get((res2:any)=>{
                    if(res2 && res2.status === "OK") {
                        console.log(`Time: ${res2.formatted}`);
                    } else {
                        console.log('Time: failed to fetch');
                    }
                    onFinish();
                });
            } else {
                console.log(`Failed to fetch data: ${this.loc}`);
                onFinish();
            }
        });
        
    }
}
