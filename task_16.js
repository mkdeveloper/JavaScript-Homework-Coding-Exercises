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

//The above code is from Task_15; This code is for Task_16

console.log("Hey folks!, I have found a bigger Dinner Table \n\n");

friends.unshift("Abdullah");

friends.push("Faizan");

friends.splice(3, 0,"Uzair");

let k = 0;

while (k < friends.length){
    console.log("\n\n" + friends[k] + message);
    k++;
}