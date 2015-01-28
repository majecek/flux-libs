"use strict";

var defaultMultimethod = require('../utils/dispatcher/DefaultMultimethod');
var serverActionHandler = defaultMultimethod();

// TODO serverActionHandler.when("start-war",function([_, data], oldState) {/*...*/});

module.exports = serverActionHandler;
