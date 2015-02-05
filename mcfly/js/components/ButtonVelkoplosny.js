"use strict";

var React = require("react");
var Button = require("./Button");

var _name = "Velkoplošný tisk";
var _klass = "velkoplosny";

var ButtonVelkoplosny = React.createClass({
  render: function() {
    return <Button name={_name} klass={_klass} />;
  }
});

module.exports = ButtonVelkoplosny;
