let rainbow = ["Violet","Indigo","Blue","Green","Yellow","Orange","Red"]; //Global Variable
let message = "Hello"
function show(message){
    for(let i = 0;i < rainbow.length;i++){
        // console.log(`Rainbow : ${i} , ${rainbow[i]}`);
    }

    rainbow.forEach((item,index)=>{
        console.log(`${message} Rainbow : ${index}:${item}`);
    })
    
    let i = 0;
    for(let j of rainbow){ //For of
        // console.log(`Rainbow ${i} : ${j}`)
        // i++
    }

    let a = 0;
    for(const k of rainbow){ //For in
        // console.log(`Rainbow ${a} : ${k}`)
        a++
    }
}
show(rainbow)