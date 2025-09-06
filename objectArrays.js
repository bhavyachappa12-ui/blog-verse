//let person={
  //  name:"Bhavya",
    age:19
//}
console.log(person.name)
console.log(person["age"])

const {name,age}=person; //Destructing assignment
console.log(name)
console.log(age)

let fruits=["apple","banana","mango"]
console.log(fruits[0])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num); //Transform Each element
console.log(squares)

let evens=numbers.filter((num)=>num%2==0) //filter values based on conditions
console.log(evens)

let sum=numbers.reduce((present,num)=>present+num,0) //reduce
console.log(sum)

let persons=[{
    name:"Bhavya",
    marks:90
},{
    name:"Ruthika",
    marks:95
},{
    name:"Jyothi",
    marks:98
}]
let max=0;
let topper=" "
for(let person of persons){
    if(person.marks>max){
        max=person.marks;
        topper=person.marks;
    }
}
console.log(`Topper is ${topper} and he got ${max}`)