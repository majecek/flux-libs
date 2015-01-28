"use strict";

var React  = require("react");
var syphon = require("syphon");

var App = React.createClass({
  mixins: [syphon.mixin],
  render: function() {
    var loggedIn = this.data().getIn(['user','loggedIn']);
    return (
      <div>
        <h1>ForteTisk</h1>
        <p>{loggedIn ? 'přihlášen' : 'nepřihlášen'}</p>
      </div>
    );
  }
});

module.exports = App;


