//OBJECTS

//DECLARATION OF OBJECTS
//1 st way
var customerdetails={
    "Name":"sowmiya",//string
    "Age":20,//value taken as number
    "Phone":"9873716492",//comma is optional for last key pair value 
}
console.log(customerdetails)
customerdetails["email"]="abc@gmail.com"//string
console.log(customerdetails)
//output of string in single quotes why ?
//key will not hold any quote as it is already inbuiltly present */

//2 ND WAY
var customerdetails={}
customerdetails["id"]="20ecr200"//string
customerdetails["name"]="sowmiya"
customerdetails["age"]="20"//string
customerdetails["phone"]="9384786537"
console.log(customerdetails)

//3 RD WAY

var kongu = new Object()
kongu["fees"]=125000
kongu["food"]="pretty decent"
kongu["hostel count"]=10
kongu["overall"]="very worst"
console.log(kongu)
console.log(kongu.overall)//here this . provides the path for accessing key inside the object
console.log(kongu["hostel count"])