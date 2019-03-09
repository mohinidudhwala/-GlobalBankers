'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarSchema = new Schema({

 id:{
     type: String, 
     required: 'mongoose-auto-increment'
  },
  Model: {
    type: String,
    required: 'Kindly enter the car Model'
  },
  Age: {
    type: Number,
    required: 'Kindly enter the Number of Month',
    default: 1
  },
  Owners: {
    type: Number,
    required: 'Kindly enter the Number of Owners',
    default: 0
  },
  value: {
    type: Number,
    required: 'Kindly enter the Car Value',
    default: 0
  },
  collision: {
    type: Number,
    default: 0
  },
  mileage :{
    type: Number,
    default: 0
  },
  
});

module.exports = mongoose.model('Car', CarSchema);