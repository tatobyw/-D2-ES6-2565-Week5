//Define object
const getUser = function(){
    return {
        "fname": "Mark",
        "address":"57/8 Avenue",
        "age":25
    }
}


//Destructuring
const {fname,address,age} = getUser()
console.log(fname,address,age)