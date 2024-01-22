/*
//looping
//For loop
sum=0
for(var i=0;i<15;i++)
{
    sum +=i
}
console.log(sum)

//while loop
 
i=0
sum=0
while(i<15){
    sum+=i
    i++
}
console.log(sum)

//do while loop

i=0
sum=0
do{
    sum+=i
    i++   // without increment th code runs for infinite loop
}while(i<15);
console.log(sum)

//example1
arr=[10,20,30] // valid
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
console.log(arr.length)

//example2
arr=[10,20,30.5] // valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//example 3
arr=[10,20,true,false] // valid
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

//example 4
arr=[10,20,,"string","kongu",true] // valid  reason: as no datatype is taken as prerequesites  
console.log(arr.length)
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
//for in loop
arr=[10,20,"string","kongu",true] 
for(const index in arr){
    console.log("The value in",index,"is",arr[index])

}

//for of loop
arr=[10,20,"string","kongu",true] 
for( value of arr){
    console.log(value)

}
//foreach loop
arr=[10,20,"string","kongu",true] 
arr.forEach(value=> {
    console.log(value)
});*/
var kongu = new Object()
kongu["fees"]=125000
kongu["food"]="pretty decent"
kongu["hostel count"]=10
kongu["overall"]="very worst"
console.log(kongu)
//for in ex =>output=key
for (key in kongu)
{
    console.log(key,kongu[key])

}

//for each ex 
kongu.forEach((key,element )=>
{
    console.log(key,element)

});




