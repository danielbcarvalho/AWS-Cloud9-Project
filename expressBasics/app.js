// #Express Routing Assignment

// Create a brand new Express app from scratch
// Create a package.json using npm init and add express as a dependency
// In your main app.js file, add 3 different routes:
// Visiting "/" should print "Hi there, welcome to my assignment!"
// Visiting "/speak/pig" should print "The pig says 'Oink'" Visiting "/speak/cow" should print "The cow says 'Moo'" Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
// Visiting "/repeat/hello/3" should print "hello hello hello" Visiting "/repeat/hello/5" should print "hello hello hello hello hello" Visiting "/repeat/blah/2" should print "blah blah"

// If a user visits any other route, print: "Sorry, page not found...What are you doing with your life?"


var express = require("express");
var catMe = require("cat-me");
var app = express();

app.get("/", function(req, res){
    var rootMessage = "Hi there, welcome to my assignment! \n\n" + catMe();
    res.send("Hi there, welcome to my assignment!");
    console.log(rootMessage);
});

app.get("/speak/:animal", function(req, res){
    var animalMessages = {
        pig: "The pig says 'Oink!'",
        cow: "The cow says 'Mooo!'",
        dog: "The dog says 'Woof Woof!'",
    };
    var animal = req.params.animal;
    var animalMessage = animalMessages[animal];
    // if (animal == "pig"){
    //     animalMessage = "The pig says 'Oink!'";
    // } 
    // else if (animal == "cow"){
    //     animalMessage = "The cow says 'Mooo!'";
    // }
    // else if (animal == "dog"){
    //     animalMessage = "The dog says 'Woof Woof!'";
    // } else {
    //     animalMessage = "Animal not found";
    // }
    res.send(animalMessage);
});

app.get("/repeat/:thing/:number", function(req, res){
    var thing = req.params.thing;
    var number = req.params.number;
    var numberMessage = "";
    
    for (var i = 0; i<number; i++){
        numberMessage += ` ${thing}`; 
    }
    
    res.send(numberMessage);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(8080, function(){
    console.log("Server has started...");
});

