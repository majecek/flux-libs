"use strict";

var multimethod = require("multimethod");

/*
 * the dispatcher will always get something like [actionType, data]
 *                                           eg. ['start-war', "now"]
 * and we want the handlers (which are multimethods) themselves
 * to dispatch on the actionType. this function helps.
 */
var dispatchOnActionType = function([actionType, data], state) {
  // destructuring (ES6): ----------^
  return actionType;
};

var exceptionOnUnknownActionType = function([actionType, data], state) {
  // destructuring (ES6): ------------------^
  throw "Unknown action type: '" + actionType + "'";
};

var defaultMultimethod = function() {
  var newMultimethod = multimethod(dispatchOnActionType);
  newMultimethod.default(exceptionOnUnknownActionType);
  return newMultimethod;
};

module.exports = defaultMultimethod;
