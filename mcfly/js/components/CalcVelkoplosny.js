"use strict";

var React = require("react");
var CategoryStore = require("../stores/CategoryStore");
var Calc = require("../components/Calc");

var _name = "Velkoplošný tisk";
var _klass = "velkoplosny";

var getState = function() {
  return {
    category: CategoryStore.getCategory(_name)
  };
};

var CalcVelkoplosny = React.createClass({

  mixins: [CategoryStore.mixin],

  getInitialState: function() {
    return getState();
  },

  storeDidChange: function() {
    this.setState(getState());
  },

  render: function() {
    var note = this.state.category.note;
    return <Calc klass={_klass} note={note} />;
  }
});

module.exports = CalcVelkoplosny;
