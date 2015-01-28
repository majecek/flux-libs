"use strict";

var syphon = require("syphon");

var config                   = require("./config");
var registerDispatcherLogger = require('./utils/logging/Dispatcher');
var viewActionHandler        = require('./action-handlers/View');
var serverActionHandler      = require('./action-handlers/Server');

var dispatcher = syphon.dispatcher();
dispatcher.handler('view',   viewActionHandler);
dispatcher.handler('server', serverActionHandler);

if (config.logging.dispatcher) {
  registerDispatcherLogger(dispatcher);
}

module.exports = dispatcher;
