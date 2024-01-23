/* 
//SET
//1st ex
setexample=new Set(["aiadmk","bjp","congress"])
for(value of setexample){
console.log(value)
}
setexample.add("dmk")
setexample.add("aiadmk")
console.log(setexample)
for(key in setexample){
    console.log(key)
}
*/

//Maps
mapexample=new Map([
    ["id","20ECR200"],
    ["NAME","SOWMIYA"],
])
mapexample.set("age","20");
mapexample.set("ph","9873496557")
console.log(mapexample)
mapexample.delete("ph")
console.log(mapexample)
/*for(value of mapexample){
    console.log(value)

}
for(key in mapexample){
    console.log(key)
}

console.log(mapexample.has("NAME"))//WITHOUT QUOTES NAME IS A VARIABLE*/