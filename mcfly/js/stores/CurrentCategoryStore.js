"use strict";

var Flux = require('../flux');

var _currentCategory = "Malonákladový tisk";

var setCurrentCategory = function(name) {
  console.log("old category: ", _currentCategory);
  _currentCategory = name;
  console.log("new category: ", name);
  console.log("---------------");
};

var handleAction = function(action) {
  if (action.actionType === "SET_CURRENT_CATEGORY") {
    setCurrentCategory(action.name);
    CurrentCategoryStore.emitChange();
  }
};

var CurrentCategoryStore = Flux.createStore({
  getCurrentCategory: function() {
    return _currentCategory;
  },
}, handleAction);

module.exports = CurrentCategoryStore;
