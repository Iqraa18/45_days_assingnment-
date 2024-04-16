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
console.log("Unfortunately , I can only invit two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest} , I can't invite you to dinner.`);
}
guests.forEach((guest) => {
    console.log(`Dear ${guest} , you're still invited in dinner.`);
});
