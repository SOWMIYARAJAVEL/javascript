//functions
//example 1  function without argument and without return type
/*function name(){
    console.log("sample")
}
name()

//example 2 function with argument and without return type
function name(a,b){
    console.log("function with argument and without return type")
    for(i=a;i<b;i++){
        if(i%2==0)
        {
            console.log("The number is",i,"even number")
        }
        else
        console.log("The number is",i,"odd number")
    }
}
a=5
b=15
name(a,b)*/
//EXAMPLE FUNCTION WITH ARGUMENT AND RETURN TYPE
a=5
b=15
function add(a,b){
    return (a+b)
}
console.log(add(a,b))

//example function without argument and with return type
function add(){
    var a=1
    var b=10
    return(a+b)
}
console.log(add())