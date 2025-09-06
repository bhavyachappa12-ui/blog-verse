// Arithmetic Operators

let x=10,y=3;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)


//Assignment Operators
let z=5;
z+=3
console.log(z)
z-=3
console.log(z)
z*=3
console.log(z)
z/=2
console.log(z)
z%=3
console.log(z)
z**=2
console.log(z)

//Comparison Operators
let a=10,b="10"
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)


//Logical Operators
let age=20;
console.log(age>=20 && a<=40)
console.log(a<20 || a>20)
console.log(!(age<18))

//String Operators
let firstName="Bhavya"
let lastName="Chappa"
let fullName=firstName+" "+lastName;
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName} , Welocome to Dev Astra`
console.log(correctName)

//Ternary Operators
let myAge=19;
if(myAge>=18){
    console.log("Eligible to vote")
}else{
    console.log("You cannot vote")
}
let result=myAge>=18 ? "Eligible to vote":"You cannot vote"
console.log(result)


//Increment and Decrement Operators
let count=5;
console.log(count++)
console.log(count)
console.log(++count)

//type operators
console.log(typeof count)
console.log(typeof "Bhavya")
console.log(typeof 18)