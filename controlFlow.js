let marks=85;
if(marks>=90){
    console.log("A+ Grade")
}else if(marks>=80){
    console.log("A Grade")
}else if(marks>=70){
    console.log("B Grade")
}else{
    console.log("Fail")
}

let day=5
switch(day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday") 
        break;     
    default:
        console.log("Invalid")
        break;                  
}

//let num=5;
//for(let i=1;i<=num;i++){
  //  console.log(i)
//}

//let n=5
//while(n<5){
  //  console.log(n)
//}

let colors=["Red","Green","Blue"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
for(let color of colors){
    console.log(color)
}

let person={
    name:"Bhavya",
    age:19,
    college:"Jntugv"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}
for(let i=5;i>=0;i--){
    if(i==3){
        continue;
    }else if(i==2){
        break;
    }
    console.log(i)
}