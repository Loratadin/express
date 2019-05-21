var express = require('express');
var app = express();

//Require the Router we defined in cars.js
var cars = [
    {id: 101, make: "Alfa Romeo", model:"4C", year: 2019, price: 79845, bodyStyle:"convertible", drivetrain:"Rear Wheel Drive", color: "red", imageUrl:"./images/alfa-romeo-c4.jpg"},
    {id: 102, make: "Chevrolet", model:"Camaro", year: 2019, price: 25995, bodyStyle:"coupe", drivetrain:"Rear Wheel Drive", color: "yellow", imageUrl:"./images/chevrolet-camaro.jpg"},
    {id: 103, make: "Dodge", model:"Charger", year: 2018, price: 32995, bodyStyle:"sedan", drivetrain:"All Wheel Drive", color: "white", imageUrl:"./images/dodge-charger.jpg"},
    { id: 104, make: "Maserati", model: "Ghibli", year: 2017, price: 40995, bodyStyle: "sedan", drivetrain: "Rear Wheel Drive", color: "white", imageUrl: "./images/maserati.jpg" },
    { id: 105, make: "Mercedes", model: "Benz", year: 2017, price: 34995, bodyStyle: "convertible", drivetrain: "Rear Wheel Drive", color: "black", imageUrl: "./images/mercedez-benz.jpg" },
    { id: 106, make: "Nissan", model: "GT-R Skyline", year: 2019, price: 99990, bodyStyle: "coupe", drivetrain: "All Wheel Drive", color: "red", imageUrl: "./images/nissan-gt-r-skyline.jpg" },
    { id: 107, make: "Bmw", model: "M3", year: 2018, price: 67495, bodyStyle: "sedan", drivetrain: "Rear Wheel Drive", color: "blue", imageUrl: "./images/bmw.jpg" },
    { id: 108, make: "Audi", model: "A3", year: 2019, price: 33300, bodyStyle: "sedan", drivetrain: "All Wheel Drive", color: "black", imageUrl: "./images/audi-a.jpg" },
    { id: 109, make: "Land Rover", model: "Range Rover", year: 2019, price: 45687, bodyStyle: "SUV", drivetrain: "All Wheel Drive", color: "white", imageUrl: "./images/land-rover.jpg" },
    {id: 110, make: "Lamborghini", model:"Huracan", year: 2015, price: 204500, bodyStyle:"coupe", drivetrain:"Rear Wheel Drive", color: "lime green", imageUrl:"./images/lamborghini.jpg"},
];
 
app.get('/cars', function(req, res){
   res.send(cars);
});

app.listen(3000);