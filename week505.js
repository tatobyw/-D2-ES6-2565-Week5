//Array Destructuring
const student = ["Mark","Elon","Jeff"]
const province = ["Trat","Chantaburi","Rayong","Chonburi","Bangkok","Prachinburi","Srakaew"]
const countries = ["Thailand","Lao","Cambodia","Vietnam","Japan","Taiwan"]

//Destructuring Assignment
const [first,second,third] = student;
const [pro1,,pro3,,pro5,,pro7] = province; //Leave space
const [coun1,coun2,...country] = countries
console.log(coun1)
console.log(coun2)
console.log(country)
// console.log(pro1)
// console.log(pro3)
// console.log(pro5)
// console.log(pro7)