let current_users = ["Zia", "Danyal", "Adil", "Zeeshan", "Shahid", "Asif"];

let new_users = ["Zia", "Uzair", "Tufail", "Danyal", "Yousaf"];

function match(item,array){
    let matched = false;
     array.forEach(element => {
        if(element == item)
            {
                matched=true;
            }
    });
    return matched;
}

new_users.forEach(element=>{
    if(match(element,current_users))
    {
        console.log(element + " username is already taken\n");
    }
    else
        console.log(element + " is availbe to use");
});