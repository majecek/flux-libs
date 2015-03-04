"use strict";

var React = require("react");
var Flux = require('delorean.js').Flux;

var CategoryChooser = require("./CategoryChooser");
var Category = require("./Category");

var Page = React.createClass({

  mixins: [Flux.mixins.storeListener],
  watchStores: ['currentCategory'],

  render: function() {
    return (
      <div id="page">
        <CategoryChooser />
        <Category />
      </div>
    );
  }

});

module.exports = Page;
