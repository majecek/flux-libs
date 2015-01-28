"use strict";

var syphon = require("syphon");

var state      = require("./state");
var dispatcher = require("./dispatcher");
var App        = require("./components/App");

syphon.root(App, state, {
  dispatcher: dispatcher,
  el: document.getElementById('app')
});
