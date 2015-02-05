"use strict";

var React = require("react");

var ButtonMalonakladovy = require("./ButtonMalonakladovy");
var ButtonVelkoplosny   = require("./ButtonVelkoplosny");
var ButtonVizitky       = require("./ButtonVizitky");
var ButtonBrozury       = require("./ButtonBrozury");
var ButtonKalendare     = require("./ButtonKalendare");

var CategoryChooser = React.createClass({
  render: function() {
    return (
      <div id="category-chooser">
        <ButtonMalonakladovy />
        <ButtonVelkoplosny />
        <ButtonVizitky />
        <ButtonBrozury />
        <ButtonKalendare />
      </div>
    );
  }
});

module.exports = CategoryChooser;
