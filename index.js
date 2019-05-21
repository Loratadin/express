var express = require('express');
var app = express();

//Require the Router we defined in cars.js
var cars = [
    {id: 101, make: "Honda", model:"Accord Sport", year: 2019},
    {id: 102, make: "Tesla", model:"X", year: 2016},
    {id: 103, make: "Tesla", model:"S", year: 2019},
    {id: 104, make: "Toyota", model:"Corolla", year: 2019}
];
 
app.get('/cars', function(req, res){
   res.send(cars);
});

app.listen(3000);