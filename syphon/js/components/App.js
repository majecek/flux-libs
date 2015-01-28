"use strict";

var React  = require("react");
var syphon = require("syphon");

var LoggedIn = require("./LoggedIn");

var App = React.createClass({
  mixins: [syphon.mixin],
  render: function() {
    // top-level app has access to all the state
    // and gives parts of it to the child components inside.
    // so eg. the LoggedIn component doesn't see the whole state
    // but just the one variable.
    var loggedIn = this.data().getIn(['user','loggedIn']);
    return (
      <div>
        <h1>ForteTisk</h1>
        <LoggedIn loggedIn={loggedIn}/>
      </div>
    );
  }
});

module.exports = App;
