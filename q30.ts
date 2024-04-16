let userNames = ["Admin", "user1", "user2", "user3"];
userNames.forEach((userName) => {
 if (userName == "Admin") {
    console.log("Hello Admin, Would you like to see a status report?");
 }
 else {
    console.log(`Hello ${userName} , thankyou for loggin again.`)
 }
});
