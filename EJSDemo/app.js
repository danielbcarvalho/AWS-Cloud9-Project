//EJS -> Embedded JavaScript templates

var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs"); //try to find the file in the directory /views
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    // {thingVar: thing} -> is passing by render the variable thing 
    //to the thingVar from love.ejs
    res.render("love.ejs", {thingVar: thing}); 
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Suzi"},
        {title: "Pet Mel", author: "Daniel"},
        {title: "Post 3", author: "Aline"},
        {title: "How is it going", author: "Mel"},
    ];

    res.render("posts.ejs", {posts: posts});
});

app.listen(8080, function(){
    console.log("The server has started!");
});