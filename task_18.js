let myFavouritePlaces = ["Saudi Arabia", "Palestine","Dubai", "Australia", "New Zealand"];

console.log("Orignal Array:\n" + myFavouritePlaces);

console.log("\nArray sorted in alphabetical order without modifying orignal Array:\n" + myFavouritePlaces.slice().sort());

console.log("\nOrignal Array:\n" + myFavouritePlaces);

console.log("\nArray sorted in Reverse order without modifying orignal Array:\n" + myFavouritePlaces.slice().sort().reverse());

console.log("\nOrignal Array:\n" + myFavouritePlaces);

console.log("\nReversed, and the order has been changed:\n" + myFavouritePlaces.reverse());

console.log("\nReversed for the second time, back to its orignal form:\n" + myFavouritePlaces.reverse());

console.log("\nArray sorted in alphabetical order, orignal has been modified:\n" + myFavouritePlaces.sort());

console.log("\nReversed alphabetical order, array has been remodified to current form:\n" + myFavouritePlaces.reverse());