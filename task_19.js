let friends = ["Adnan", "Siyar", "Arif", "Yousaf"];
let message = " you are invited for dinner, Kindly join us.";
let i = 0;

while (i < friends.length) {
  console.log(friends[i] + message);
  i++;
}

console.log(friends[1], " cannot come for dinner.");

friends[1] = "Waqas";

let j = 0;

while (j < friends.length) {
  console.log(friends[j] + message);
  j++;
}

//The above code is from Task_15; This code is for Task_16

console.log("Hey folks!, I have found a bigger Dinner Table \n\n");

friends.unshift("Abdullah");

friends.push("Faizan");

friends.splice(3, 0, "Uzair");

let k = 0;

while (k < friends.length) {
  console.log("\n\n" + friends[k] + message);
  k++;
}

// Task_17 code

console.log(
  "\n \nUnfortunatly, The Dinner Table I ordered, won't arrive in time.\nI can invite only two people."
);

let invitedFriends = friends.splice(0, 2);

let l = 0;

while (l < friends.length) {
  console.log("\nSorry! I can't invite you to dinner " + friends[l]);
  l++;
}

let m = 0;

while (m < invitedFriends.length) {
  console.log("\nYou are still invited " + invitedFriends[m]);
  m++;
}

//This piece of code clear the array, and return and empty array, thus this line of code is not require in this program,
// to calculate the number of friends.
//invitedFriends.splice(0,invitedFriends.length);
//This line printed an empty array, thus its also not needed.
//console.log(invitedFriends);

console.log(
  "\nThe total number of Friends comming for dinner is: " +
    invitedFriends.length
);
