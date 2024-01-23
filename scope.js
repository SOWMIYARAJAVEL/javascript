//global scope
sum=0
for(var i=0;i<15;i++)
{
    sum +=i
}
console.log(sum)
 
i=0
sum=0
while(i<15){
    sum+=i
    i++
}
console.log(sum)

i=0
sum=0
do{
    sum+=i
    i++   // without increment th code runs for infinite loop
}while(i<15);
console.log(sum)

//local scope
for(let i=0;i<5;i++)//let holds the accessbiliry till the program ena nd var holds the accessibilty outside the block as well
{
    console.log(i+11)
}
console.log(i)

//block scope
var a=10
console.log(a)
{
a= 5;//a=5 reassigns tha var a value as 5 which replaces a value globally
let b=5;
console.log(a)
console.log(b)
}
console.log(a)

//2
var a=10
console.log(a)
{
let a= 5;//local assignment ends within block 
let b=5;
console.log(a)
console.log(b)
}
console.log(a)



