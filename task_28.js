function stage_of_life (age) {

//Required code for the task 28 is below this line
    if (age < 2) {
        return console.log("The person is a baby");
    } else if (age >= 2 && age < 4) {
        return console.log("The person is a toddler");
    } else if (age >= 4 && age < 13) {
        return console.log("The person is a Kid");
    } else if (age >= 13 && age < 20) {
        return console.log("The person is a teenager");
    } else if (age >= 20 && age < 65) {
        return console.log("The person is an adult");
    } else if (age >= 65) {
        return console.log("The person is an elder");
    } 

//Required code for the task 28 is above this line

}

stage_of_life(1);
stage_of_life(2);
stage_of_life(4);
stage_of_life(13);
stage_of_life(20);
stage_of_life(65);