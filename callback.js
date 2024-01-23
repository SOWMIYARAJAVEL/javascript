//callback
function ramusomu(name,callback){
    setTimeout(function(){
        console.log(name)
        callback()
    },2000)

}
function miniani(){
    console.log("odi poidu vanthadatha !!!!")
}
ramusomu("hello ramusomu",miniani)


 //callbacks
 function SubmitForm(buttonclicked,db){
    setTimeout(function()//1st executes
    {
      console.log(buttonclicked)
      db();
    },2000)
  }
  function db(){
    console.log("Form submitted successfully and stored")
  }
  
    SubmitForm("Form Submit button clicked",db)
  
  
  
    function program(run,output){
      setTimeout(function() {
        console.log(run)
        output() //for callback subfunction is to be called as parameter not function
      }, 3000  );
    }
    function output(){
      console.log("output is obtained")
    }
    program("code runs succesfully",output)