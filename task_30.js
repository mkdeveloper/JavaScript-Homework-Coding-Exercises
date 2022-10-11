let userNames = ["Admin", "Khubaib", "Zia", "Danyal", "Adil", "Zeeshan", "Shahid"];

for (i in userNames) {
    if ("Admin" ==  userNames[i]){
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log("\nHello "+ userNames[i] + ", thankyou for logging in again");
    }
}