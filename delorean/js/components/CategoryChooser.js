"use strict";

var React = require("react");

var Button = require("./Button");

var CategoryChooser = React.createClass({

  render: function() {
    return (
      <div id="category-chooser">
        <Button tag="malonakladovy" />
        <Button tag="velkoplosny" />
      </div>
    );
  }

});

module.exports = CategoryChooser;
