faker = require("faker")

var welcome = '====================\n WELCOME TO MY SHOP! \n===================='
console.log(welcome);
for(var i=0; i<10; i++){
    console.log(faker.fake("{{commerce.productName}}, price = ${{commerce.price}}"));
}