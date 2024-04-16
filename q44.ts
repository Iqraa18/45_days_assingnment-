function sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

sandwich("Chicken", "cheese");
sandwich("lettuce", "tomato");
sandwich("mustard", "mayo");