"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
city("Karachi");
city("Lahore");
city("Tokyo", "Japan");
