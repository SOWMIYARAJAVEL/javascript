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
