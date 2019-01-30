"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetcher_1 = __importDefault(require("./fetcher"));
const param = process.argv[2];
const locations = param.split(";");
let i = 0;
const fetch = () => {
    if (locations.length <= i) {
        return;
    }
    new fetcher_1.default(locations[i]).fetch(fetch);
    i++;
};
fetch();
