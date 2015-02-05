"use strict";

var React = require("react");
var Button = require("./Button");

var _name = "Vizitky";
var _klass = "vizitky";

var ButtonVizitky = React.createClass({
  render: function() {
    return <Button name={_name} klass={_klass} />;
  }
});

module.exports = ButtonVizitky;
