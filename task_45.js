function infoCar (manu, modName, ...features) {
    return carInfo = {
        manufacturer : manu,
        modalName : modName,
        features
    };
}

let car = infoCar("Honda", "Civic", color = "red", Automatic = true);

console.log(car);
