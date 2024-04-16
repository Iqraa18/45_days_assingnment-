
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Record<string, any> {
    let car: Record<string, any> = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "Black"], ["year", 2022]));
console.log(make_car("Ford", "Fiesta", ["color", "White"], ["sunroof", true]));
