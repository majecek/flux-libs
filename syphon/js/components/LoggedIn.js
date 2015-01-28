"use strict";

var React  = require("react");
var syphon = require("syphon");

var LoggedIn = React.createClass({
  mixins: [syphon.mixin],

  // here we send an Action to the Dispatcher
  toggleLogin: function() {
    this.dispatch('view',['toggle-login',{}]);
  },

  render: function() {
    return (
      <p onClick={this.toggleLogin}>
        {this.props.loggedIn ? 'přihlášen' : 'nepřihlášen'}
      </p>
    );
  }
});

module.exports = LoggedIn;
