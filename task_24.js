let car = 'subaru';

// Tests for equality and inequality with strings

console.log("Is the string of car = 'subaru' == 'SUBARU' ? I predict False");
console.log(car == 'SUBARU');


// Checking if the given string is uppercase of lowercase
function checkCase(ch) {
    if (ch == ch.toUpperCase()) {
        return false;
       }
    if (ch == ch.toLowerCase()){
        return true;
    }
}

console.log("\nIs the string of car is in Lower Case ? I predict True");
console.log(checkCase(car));

//  Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nIs car == \"\" ? I predict False");
console.log(car == "");

console.log("\nIs car !== \"\" ? I predict True");
console.log(car !== "");

console.log("\nIs car > \"\" ? I predict True");
console.log(car > "");

console.log("\nIs car < \"\" ? I predict False");
console.log(car < "");

console.log("\nIs car >= \"\" ? I predict True");
console.log(car > "");

console.log("\nIs car <= \"\" ? I predict False");
console.log(car < "");

//Tests using "and" and "or" operators

console.log("\nIs car  == 'subaru' and car  == 'SUBARU' ? I predict False");
console.log(car == 'subaru' && car == 'SUBARU');

console.log("\nIs car  == 'subaru' or car  == 'SUBARU' ? I predict True");
console.log(car == 'subaru' || car == 'SUBARU');

//Test whether an item is in a array
console.log("\nIs car is an array ? I predict False");
console.log(car == []);

//Test whether an item is not in a array
console.log("\nIs car is not an array ? I predict True");
console.log(car !== []);