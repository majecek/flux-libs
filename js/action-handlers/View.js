"use strict";

var defaultMultimethod = require('../utils/dispatcher/DefaultMultimethod');
var viewActionHandler = defaultMultimethod();

// TODO viewActionHandler.when("start-war",function([_, data], oldState) {/*...*/});

module.exports = viewActionHandler;
