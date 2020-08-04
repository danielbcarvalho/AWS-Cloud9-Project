const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(function(response) {
        console.log(response.data);
        console.log("It worked!");
    })
    .catch(function(error) {
        console.log(error);
        console.log("Something Went Wrong");
    })
    .finally(function() {
        // always executed
    });