"use strict";

var Flux = require('delorean.js').Flux;

var constants = require('./constants');
var CurrentCategory = require('./stores/CurrentCategory');

var Dispatcher = Flux.createDispatcher({

  //// our defined actions: ////

  setCurrentCategory: function(name) {
    this.dispatch(constants.actions.setCurrentCategory, name);
  },

  //// required: ///

  getStores: function() {
    return {
      currentCategory: CurrentCategory
    }
  }

});

module.exports = Dispatcher;
