var express = require("express");
var app = express();
var axios = require("axios");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/results", function(req, res) {
    //get text from the form in /home
    var movie = req.query.searchMovie;

    axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=thewdb`)
        .then(function(response) {
            var movies = response.data;
            res.render("results", { movies: movies });
        })
        .catch(function(error) {
            console.log(error);
            console.log("Something Went Wrong");
        })
        .finally(function() {
            // always executed
        });
});


app.listen(8080,  function() {
    console.log("Movie App has started...");
});