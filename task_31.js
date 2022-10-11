//The Users has been removed from this array, to make sure the correct message is printed.
let userNames = [];

if (userNames.length > 0) {
  for (i in userNames) {
    if ("Admin" == userNames[i]) {
      console.log("Hello Admin, would you like to see a status report?");
    } else {
      console.log(
        "\nHello " + userNames[i] + ", thankyou for logging in again"
      );
    }
  }
} else {
    console.log("We need to find some users!");
}
