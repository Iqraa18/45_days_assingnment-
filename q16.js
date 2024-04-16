"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Hania", "Shiza", "Humaira"];
console.log(`Great news , I found a bigger dinner table!!`);
guests.unshift("Fatima");
guests.splice(guests.length / 2, 0, "Amna");
guests.push("Sudaisa");
guests.forEach((guest) => {
    console.log(`Dear ${guest} , would you like to join me in dinner?`);
});
