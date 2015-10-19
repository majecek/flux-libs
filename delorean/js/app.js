"use strict";

var React = require("react");
var Page = require("./components/Page");

var Dispatcher = require("./dispatcher");

console.log(Dispatcher);

var rootElement = document.getElementById("app");

React.render(<Page dispatcher={Dispatcher} />, rootElement);
