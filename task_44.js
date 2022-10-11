function sandwichOrder (...param) {
    let order = [...param];
    console.log(order);
}

sandwichOrder("Cheese", "Egg");
sandwichOrder("Mayo","Cheese", "Egg");
sandwichOrder("Salad","Cheese", "Egg", "Mayo", "Beef Slices");