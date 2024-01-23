//ES6-> ECMA Script 6 standard
/*
//1.var,let,const
//2.arrow function
var Fun=()=>{

    console.log("hello")
}
Fun()

//3.destructuring
var array=[10,20,30,40,50]
var [a,b,c,d,e]=array
console.log(a,b,c,d,e)

//4.spread operator
var array=[10,20,30,40,50]
var arr1=[...array,60,70]
console.log(arr1)

//promise using arrow function
var isLocationValid=(loc)=> {
    var v = "Melbourne"
    if (v === "valid") {
      return true
    }
    else {
      return false
    }
  }
  var location=()=> {
    return new Promise(function(response, errorMsg){
      setTimeout(()=> {
        Loc = "Melbourne"
        console.log("The location is",Loc)
        if(isLocationValid) {
          return response("Location Found")
        }
        else {
          return errorMsg("Location not Found ")
        }
      },2000)
  
  })
  
  }
  location()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(response){
      console.log(response);
    });
  //async and await using arrow function
    async function commentcode() {
      return new Promise(
          function (commentvalue) {
              setTimeout( ()=> {
                  commentvalue("This is my first post's comment icon")
              }, 1000)
          });
  }
  
  
  async function likecode() {
      return new Promise(
          function (likevalue) {
              setTimeout(()=> {
                  likevalue("This is my first post's like icon")
              }, 1000)
          }
  
      )
  
  }
  async function post() {
      var post = new Promise(
          function (postresponse) {
              setTimeout(()=> {
                  postresponse("This is my first post")
              }, 3000)
          });
      var [feed, like, comment] = await Promise.all([post, likecode(), commentcode()])
      console.log(feed);
      console.log(like);
      console.log(comment)
  
  }
  post()
*/
  //callback using arrow function
  var SubmitForm=(buttonclicked,db)=>{
    setTimeout(function()//1st executes
    {
      console.log(buttonclicked)
      db();
    },2000)
  }
  var db=()=>{
    console.log("Form submitted successfully and stored")
  }
  
    SubmitForm("Form Submit button clicked",db)
  
  
  
    var program=(run,output)=>{
      setTimeout(function() {
        console.log(run)
        output() //for callback subfunction is to be called as parameter not function
      }, 3000  );
    }
    var output=()=>{
      console.log("output is obtained")
    }
    program("code runs succesfully",output)