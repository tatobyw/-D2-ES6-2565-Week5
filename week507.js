//Define object
const users = {
    "name": "Mark",
    "address":"57/8 Avenue",
    "age":25
}

//Define Call
function showUser({name,age}){
    console.log(`${name} is ${age} years old!`)
}   

//Call Function
showUser(users)