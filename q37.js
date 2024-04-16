"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tshirt(size = "large", message = "I'm a Programmer") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
tshirt();
tshirt("medium");
tshirt("small", "I love to do coding");
