let car = 'subaru';

//Evaluation of 5 True tests

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("\nIs typeof car == 'string' ? I predict True.");
console.log(typeof(car) == "string");

console.log("\nIs car.length > 0? I predict True");
console.log(car.length > 0);

console.log("\nIs car.length > 0 and Is car == 'subaru' ? I predict True");
console.log(car.length > 0 && car == 'subaru');

console.log("\nIs car !== \"\" ? I predict True");
console.log(car !== "" );

//Evaluation of 5 False tests

console.log("\n\n\nIs car == 'SUBARU'? I predict False.");
console.log(car == 'SUBARU');

console.log("\nIs typeof car == 'object' ? I predict False.");
console.log(typeof(car) == "object");

console.log("\nIs car.length < 0? I predict False");
console.log(car.length < 0);

console.log("\nIs car.length > 0 and Is car == 'SUBARU' ? I predict False");
console.log(car.length > 0 && car == 'SUBARU');

console.log("\nIs car == \"\" ? I predict False");
console.log(car == "" );