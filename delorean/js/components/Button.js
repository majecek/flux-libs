"use strict";

var React = require("react/addons"); // for React.addons.classSet()
var Flux = require('delorean.js').Flux;

var constants = require("../constants");
var Dispatcher = require("../dispatcher");

var Button = React.createClass({

  //// handlers: ////

  setCategory: function() {
    Dispatcher.setCurrentCategory(this.props.tag);
  },

  //// required: ////

  mixins: [Flux.mixins.storeListener],
  watchStores: ['currentCategory'],

  render: function() {

    var category = constants.categories[this.props.tag];

    var classes = {
      'active': (this.props.tag === this.stores.currentCategory.store.getState().currentCategory)
    };
    classes[category.className] = true;

    var classString = React.addons.classSet(classes);

    return (
      <div className={classString}
           onClick={this.setCategory}>
        {category.name}
      </div>
    );
  }

});

module.exports = Button;
