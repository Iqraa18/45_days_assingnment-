"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "Black"], ["year", 2022]));
console.log(make_car("Ford", "Fiesta", ["color", "White"], ["sunroof", true]));
