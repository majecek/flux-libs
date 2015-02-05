"use strict";

var React = require("react/addons");
var CurrentCategoryStore = require("../stores/CurrentCategoryStore");
var CategoryActions = require("../actions/CategoryActions");

var getState = function() {
  return {
    category: CurrentCategoryStore.getCurrentCategory()
  };
};

var Button = React.createClass({

  mixins: [CurrentCategoryStore.mixin],

  getInitialState: function() {
    return getState();
  },

  storeDidChange: function() {
    this.setState(getState());
  },

  setCategory: function() {
    CategoryActions.setCurrentCategory(this.props.name);
  },

  render: function() {

    var classes = {
      'active': (this.props.name === this.state.category)
    };
    classes[this.props.klass] = true;

    var classString = React.addons.classSet(classes);

    return (
      <div className={classString}
           onClick={this.setCategory}>
        {this.props.name}
      </div>
    );
  }
});

module.exports = Button;
