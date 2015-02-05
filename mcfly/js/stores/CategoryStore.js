"use strict";

var Flux = require('../flux');

var _categories = [
  {name: "Malonákladový tisk", note: "blabla malonáklad"},
  {name: "Velkoplošný tisk",   note: "velko nákladový"},
  {name: "Vizitky",            note: "nějaké vizitky"},
  {name: "Brožury, knihy",     note: "knížky knížky knížky"},
  {name: "Kalendáře",          note: "stolní, nástěnné"}
];

var CategoryStore = Flux.createStore({
  getCategory: function(name) {
    return _categories.filter(function(category){
      return category.name === name;
    })[0];
}}, function(action){});

module.exports = CategoryStore;
