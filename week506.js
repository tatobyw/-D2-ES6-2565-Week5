//Object Destructuring
const students = {
    "fname": "Mark",
    "address": "57/5",
    "Age": 25,
    "ID": 101,
    "department": {
        "name": "Mark",
        "Shift": "Monitoring",
        "address" : {
            "City": "LA",
            "street": "7th Residency RD",
            "zip": 23000
        }
    }
}
//Object Destructuring define
// const {fname,address:newAddress,age,ID,grade = 4} = students
// console.log(fname,newAddress,Age,IDgrade);

const { department: { address: { City } } } = students
console.log(City)

// let fname = students.fname
// let address = students.Address
// let age = students.Age
// let id = students.ID
// console.log(fname)
// console.log(fname,Address,Age,ID);
