function greet(){
    console.log("Welcome to Dev Astra")
}
greet()

function add(x,y){
    return x+y;
}
let result=add(15,16)
console.log(result)

const pi=3.14
console.log(pi)

const multiply=function(a,b){
    return a*b;
}
console.log(multiply(5,3))

//Arrow Function
const square=(x)=> x*x;
console.log(square(5))

const subtract=(x,y)=>{
    console.log(x,y)
    return x-y;
}
console.log(subtract(20,15))

