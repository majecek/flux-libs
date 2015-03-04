"use strict";

var React = require("react");
var Flux = require('delorean.js').Flux;

var Calc = require("./Calc");

var Category = React.createClass({

  mixins: [Flux.mixins.storeListener],
  watchStores: ['currentCategory'],

  render: function() {
    var currentCategory = this.stores.currentCategory.store.getState().currentCategory;
    return <Calc category={currentCategory} />;
  }
});

module.exports = Category;
