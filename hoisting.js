//hoisting => 1)first call and 2)then define

/*console.log(a)
let a=10 //output:reference error 

console.log(a)//  var here it recognise the value but cannot access it
var a=10//output:undefined 
*/
//functional hoisting similar as var
konguclg(5,10)
function konguclg(a,b){
    for (var i=a;i<b;i++)
    {
        if(i%2==0){
            console.log("The number is",i,"even")
        }
        else
        console.log("The number is",i,"odd")
    }


}