'use strict';
var fs = require("fs");

//Belwe code is used with Mongo Db database:

// var mongoose = require('mongoose'),
// Car = mongoose.model('Car');

// exports.list_all_car = function(req, res) {
//     Car.find({}, function(err, car) {
//       if (err)
//         res.send(err);
//       res.json(car);
//     });
//   };
// ===========================================  


exports.get_car_value= function(req, res) {    
// First read existing CarsData.
fs.readFile(  './car.json', 'utf8', function (err, data) {
    data = JSON.parse( data );
    for(var carKey in data) {
       //Owners 
       if(data[carKey].owners > 0){
            if(data[carKey].owners >=2){
                data[carKey].value = Math.round(data[carKey].value - ((data[carKey].value/100) * 25));
            }    
            //Age
            if(data[carKey].age > 120){
                    data[carKey].value = Math.round(data[carKey].value - ((data[carKey].value/100) * 0.5));
                }
                //Mileage
            if(Math.round(data[carKey].mileage) >= 1000){ 
                if(Math.round(data[carKey].mileage / 1000) >= 150){
                    for(var i = 1 ; i<=150 ; i++){
                        data[carKey].value = Math.round(data[carKey].value - ((data[carKey].value/100) * 0.2));
                    }
                }else{
                    for(var i = Math.round(data[carKey].mileage / 1000) ; i>0 ; i--){
                        data[carKey].value = Math.round(data[carKey].value - ((data[carKey].value/100) * 0.2));
                    }
                }
            }    
            if(data[carKey].collision >= 5){
                for(var i = 1 ; i<=5 ; i++){
                    data[carKey].value = Math.round(data[carKey].value - ((data[carKey].value/100) * 2));
                }
            }else{
                for(var i = 1 ; i<=data[carKey].collision ; i++){
                    data[carKey].value = Math.round(data[carKey].value - ((data[carKey].value/100) * 2));
                }
            }    
        }else{
            data[carKey].value = Math.round(data[carKey].value + ((data[carKey].value/100) * 10));
       }
    }
    res.end( JSON.stringify(data));
 });
}