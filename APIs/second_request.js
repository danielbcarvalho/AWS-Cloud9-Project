var request = require('request');

console.log("getting data from API");

request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('body:', typeof body); // Print the HTML for the Google homepage.
    var parseData = JSON.parse(body);
    console.log(parseData["email"]);
    console.log(parseData.email);
});