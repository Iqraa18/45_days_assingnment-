"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}
sandwich("Chicken", "cheese");
sandwich("lettuce", "tomato");
sandwich("mustard", "mayo");
