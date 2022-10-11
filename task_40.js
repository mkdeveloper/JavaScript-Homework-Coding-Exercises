function make_album (artName , albtitle ) {
    return album = {
        artistName : artName,
        albumtitle : albtitle
    };
}

let album1 = (make_album("Michael Jackson", "Thriller"));
let album2 = (make_album("Eagles", "Hotel California"));
let album3 = (make_album("Pink Floyd", "The Wall"));

console.log(album1);
console.log(album2);
console.log(album3);

album3.noOfTracks = 7;

console.log(album3);



