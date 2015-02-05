"use strict";

var React = require("react");
var Button = require("./Button");

var _name = "Brožury, knihy";
var _klass = "brozury";

var ButtonBrozury = React.createClass({
  render: function() {
    return <Button name={_name} klass={_klass} />;
  }
});

module.exports = ButtonBrozury;
