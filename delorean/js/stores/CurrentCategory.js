"use strict";

var Flux = require('delorean.js').Flux;

var constants = require('../constants');

var actions = {};
//     [... = string by which we link it in dispatcher and store
//                                            = "... = name of fn in store
actions[constants.actions.setCurrentCategory] = "setCurrentCategory";

var CurrentCategoryStore = Flux.createStore({

  /////////////// store specific: ////

  _currentCategory: "malonakladovy",

  setCurrentCategory: function(category){
    this._currentCategory = category;
    this.emit('change');
  },

  ////////////////////////// required: //////

  actions: actions,

  getState: function () {
    return {
      currentCategory: this._currentCategory
    };
  }

});

module.exports = new CurrentCategoryStore();
