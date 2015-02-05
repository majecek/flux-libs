"use strict";

var React = require("react");
var CategoryStore = require("../stores/CategoryStore");
var Calc = require("../components/Calc");

var _name = "Brožury, knihy";
var _klass = "brozury";

var getState = function() {
  return {
    category: CategoryStore.getCategory(_name)
  };
};

var CalcBrozury = React.createClass({

  mixins: [CategoryStore.mixin],

  getInitialState: function() {
    return getState();
  },

  storeDidChange: function() {
    console.log(getState());
    this.setState(getState());
  },

  render: function() {
    var note = this.state.category.note;
    return <Calc klass={_klass} note={note} />;
  }
});

module.exports = CalcBrozury;
