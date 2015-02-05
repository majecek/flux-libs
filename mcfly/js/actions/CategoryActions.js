"use strict";

var Flux = require('../flux');

var CategoryActions = Flux.createActions({
  setCurrentCategory: function(name) {
    return {
      actionType: "SET_CURRENT_CATEGORY",
      name: name
    }
  }
});

module.exports = CategoryActions;
