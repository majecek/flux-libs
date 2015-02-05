"use strict";

var React = require("react");
var CurrentCategoryStore = require("../stores/CurrentCategoryStore");

var CalcMalonakladovy = require("../components/CalcMalonakladovy");
var CalcVelkoplosny   = require("../components/CalcVelkoplosny");
var CalcVizitky       = require("../components/CalcVizitky");
var CalcBrozury       = require("../components/CalcBrozury");
var CalcKalendare     = require("../components/CalcKalendare");

var getState = function() {
  return {
    category: CurrentCategoryStore.getCurrentCategory()
  };
};

var Category = React.createClass({

  mixins: [CurrentCategoryStore.mixin],

  getInitialState: function() {
    return getState();
  },

  storeDidChange: function() {
    this.setState(getState());
  },

  render: function() {
    switch (this.state.category) {
      case "Malonákladový tisk": return <CalcMalonakladovy />;
      case "Velkoplošný tisk":   return <CalcVelkoplosny />;
      case "Vizitky":            return <CalcVizitky />;
      case "Brožury, knihy":     return <CalcBrozury />;
      case "Kalendáře":          return <CalcKalendare />;
    }
  }
});

module.exports = Category;
