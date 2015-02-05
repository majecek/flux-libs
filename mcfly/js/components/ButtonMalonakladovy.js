"use strict";

var React = require("react");
var Button = require("./Button");

var _name = "Malonákladový tisk";
var _klass = "malonakladovy";

var ButtonMalonakladovy = React.createClass({
  render: function() {
    return <Button name={_name} klass={_klass} />;
  }
});

module.exports = ButtonMalonakladovy;
