"use strict";

var React = require("react");
var Flux = require('delorean.js').Flux;

var constants = require("../constants");

var Calc = React.createClass({

  mixins: [Flux.mixins.storeListener],
  watchStores: ['currentCategory'],

  render: function() {
    var className = constants.categories[this.props.category].className;
    var description = constants.categories[this.props.category].description;
    return (
      <div id="calc" className={className}>
        {description}
      </div>
    );
  }
});

module.exports = Calc;
