"use strict";

var React = require("react");

var CategoryChooser = require("../components/CategoryChooser");
var Category = require("../components/Category");

var Page = React.createClass({
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
