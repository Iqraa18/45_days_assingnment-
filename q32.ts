let userNames = ["Admin", "user1", "user2", "user3"];
let newUser = ["user2", "user4", "user5", "user6"];
newUser.forEach((newUser) => {
  if (
    userNames.some(
      (userName) => userName.toLowerCase() == newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to add new user name.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});
