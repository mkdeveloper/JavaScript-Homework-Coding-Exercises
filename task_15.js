let friends = ["Adnan", "Siyar", "Arif", "Yousaf"];
let message = " you are invited for dinner, Kindly join us.";
let i = 0;


while (i < friends.length){
    console.log(friends[i] + message);
    i++;
}

console.log(friends[1], " cannot come for dinner.");

friends[1] = "Waqas";

let j = 0;

while (j < friends.length){
    console.log(friends[j] + message);
    j++;
}