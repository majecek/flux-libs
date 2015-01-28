"use strict";

var defaultMultimethod = require('../utils/dispatcher/DefaultMultimethod');
var viewActionHandler = defaultMultimethod();

// example
viewActionHandler.when("toggle-login",function([_, data], oldState) {
  return oldState.updateIn(['user','loggedIn'],function(x){return !x;});
});

// TODO viewActionHandler.when("start-war",function([_, data], oldState) {/*...*/});

module.exports = viewActionHandler;
