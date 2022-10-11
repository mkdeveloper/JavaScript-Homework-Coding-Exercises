let magicians = ["David Blaine", "Lance Burton", "Shin Lim", "David Devant", "Apollo Robbins", "David Copperfield"];

function show_magicians () {
    let i = 0;
    while (i < magicians.length) {
        console.log(magicians[i]);
        i++
    }
}

show_magicians () ;

let newMagicians =[...magicians];

console.log("\n\n");

function make_great () {

    newMagicians.forEach((element, index) => {
        newMagicians[index] ="The Great " + element;
    });

    return console.log(newMagicians);
}
console.log("\nArray with the Great added to each magician’s name")
make_great();

console.log("\nOrignal Array:\n" + magicians);