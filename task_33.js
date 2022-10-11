let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i in ordinalNumbers) {
    if (ordinalNumbers[i] == 1) {
        console.log(ordinalNumbers[i]+"st");
    } else if(ordinalNumbers[i] == 2) {
        console.log(ordinalNumbers[i]+"nd");
    } else if (ordinalNumbers[i] == 3) {
        console.log(ordinalNumbers[i]+"rd");
    }else if (ordinalNumbers[i] > 3 && ordinalNumbers[i]<=9){
        console.log(ordinalNumbers[i]+"th");
    }
}