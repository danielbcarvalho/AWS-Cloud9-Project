var express = require("express");
var app = express();
//**Routes **/
// "/" -> "hi there"
// "/bye" -> "GoodBye"
// "/dog" -> "Meow"

//define the route
//request and response
app.get("/", function(req, res){
    res.send("Hi There");
});

app.get("/bye", function(req, res){
    res.send("GoodBye"); 
    console.log("Someone make a request to /bye");
});

app.get("/dog", function(req, res) {
    console.log("Someone make a request to /dog");
    res.send("Meow");
})

// Tell Express to listen for request (start server)
app.listen(8080, function(){
    console.log("Server has started!");
});
