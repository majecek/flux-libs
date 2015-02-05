"use strict";

var React = require("react");
var Button = require("./Button");

var _name = "Kalendáře";
var _klass = "kalendare";

var ButtonKalendare = React.createClass({
  render: function() {
    return <Button name={_name} klass={_klass} />;
  }
});

module.exports = ButtonKalendare;

