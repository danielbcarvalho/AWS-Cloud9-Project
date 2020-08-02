var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Milton", "Mel", "Nina", "Lily"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    //req.body.newfriend .body is from the input using the "body-parser"
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(8080, function(){
    console.log("The server has started...");
});
