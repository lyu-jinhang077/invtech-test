import Fetcher from './fetcher';

const param = process.argv[2];
const locations = param.split(';');
let i = 0;

const fetch = () => {
    if(locations.length <= i) return;
    new Fetcher(locations[i]).fetch(fetch);
    i++;
}

fetch();
