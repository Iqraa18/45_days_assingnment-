"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    let suffix = "th";
    if (number == 1) {
        suffix = "st";
    }
    else if (number == 2) {
        suffix = "nd";
    }
    else if (number == 3) {
        suffix = "rd";
    }
    console.log(`${number} ${suffix}`);
});
