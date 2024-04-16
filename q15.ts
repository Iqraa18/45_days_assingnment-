let guests = ["Hania", "Fatima", "Humaira"];
guests.forEach((guest) => {
  console.log(`Hello ${guest} , would you like to join me in dinner?`);
});

let unableToAttend = "Fatima";
console.log(`${unableToAttend} can't attend dinner.`);

let newGuests = "Shiza";
guests[guests.indexOf(unableToAttend)] = newGuests;

guests.forEach((guest) => {
  console.log(`Hello ${guest} , would you like to join me in dinner?`);
});
