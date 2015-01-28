"use strict";

var syphon = require("syphon");

var config              = require("./config");
var registerStateLogger = require('./utils/logging/State');

var state = syphon.atom({
  user: {
    loggedIn: false
  }
});

if (config.logging.state) {
  registerStateLogger(state);
}

module.exports = state;
