let personName = "Muhammad khubaib khan from Peshawar";
const upperCase = personName.toUpperCase();
const lowerCase = personName.toLowerCase();


let personNewName = personName.split(" ");
updatedPersonName = "";
for(i in personNewName){
    let newName = personNewName[i].replace(personNewName[i][0],personNewName[i][0].toUpperCase());
    updatedPersonName = updatedPersonName.concat(newName).concat(" ");
}


console.log(upperCase);

console.log(lowerCase);

console.log(updatedPersonName);