"use strict";

var React = require("react");
var CategoryStore = require("../stores/CategoryStore");
var Calc = require("../components/Calc");

var _name = "Malonákladový tisk";
var _klass = "malonakladovy";

var getState = function() {
  return {
    category: CategoryStore.getCategory(_name)
  };
};

var CalcMalonakladovy = React.createClass({

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

module.exports = CalcMalonakladovy;
