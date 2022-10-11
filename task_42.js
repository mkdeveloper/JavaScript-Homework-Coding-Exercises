let magicians = ["David Blaine", "Lance Burton", "Shin Lim", "David Devant", "Apollo Robbins", "David Copperfield"];

function show_magicians () {
    let i = 0;
    while (i < magicians.length) {
        console.log(magicians[i]);
        i++
    }
}

show_magicians () ;

console.log("\n\n");

function make_great () {

    magicians.forEach((element, index) => {
        magicians[index] ="The Great " + element;
    });

    return console.log(magicians);
}

make_great();