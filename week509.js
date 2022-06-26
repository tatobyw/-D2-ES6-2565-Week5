//Define object
const users = [
    {
        "name": "Mark",
        "address": "57/8 Avenue",
        "age": 25
    },
    {
        "name": "ZEE",
        "address": "111 Tharanae",
        "age": 19
    },
    {
        "name": "Wave",
        "address": "89/9 ThaSom",
        "age": 19
    }
]

//Object Destructuring with for-of loop
for(let{name,address,age} of users){
    console.log(`${name} Address:${address} Age: ${age} years old!`)
}