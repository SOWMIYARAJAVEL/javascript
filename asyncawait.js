//async dummy ex
/*async function asAw() {
    var promise = new Promise(
        function (response) {
            setTimeout(function () {
                response("Example of async and await")
            }, 1000);
        });
    console.log(  promise)
}

asAw()*/
//kind of inst
async function commentcode() {
    return new Promise(
        function (commentvalue) {
            setTimeout(function () {
                commentvalue("This is my first post's comment icon")
            }, 1000)
        });
}


async function likecode() {
    return new Promise(
        function (likevalue) {
            setTimeout(function () {
                likevalue("This is my first post's like icon")
            }, 1000)
        }

    )

}
async function post() {
    var post = new Promise(
        function (postresponse) {
            setTimeout(function () {
                postresponse("This is my first post")
            }, 3000)
        });
    var [feed, like, comment] = await Promise.all([post, likecode(), commentcode()])
    console.log(feed);
    console.log(like);
    console.log(comment)

}
post()