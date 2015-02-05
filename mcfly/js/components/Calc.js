"use strict";

var React = require("react");

var Calc = React.createClass({
  render: function() {
    return (
      <div id="calc" className={this.props.klass}>
        {this.props.note}
      </div>
    );
  }
});

module.exports = Calc;
