"use strict";

var diff = require("deep-diff").diff;

var logChange = function(change, inArray = false) {
  // default argument (ES6) -------------^

  switch (change.kind)
  {
    case "N":
      inArray
        ? console.log("--",             "new:", change.rhs)
        : console.log("-", change.path, "new:", change.rhs);
      break;

    case "D":
      inArray
        ? console.log("--",             "deleted, was:", change.lhs)
        : console.log("-", change.path, "deleted, was:", change.lhs);
      break;

    case "E":
      inArray
        ? console.log("--",             "changed from:", change.lhs, "to:", change.rhs)
        : console.log("-", change.path, "changed from:", change.lhs, "to:", change.rhs);
      break;

    case "A":
      console.log("-", change.path, "array change at index", change.index);
      var willBeInArray = true;
      logChange(change.item, willBeInArray);
      break;
  }
};

var logStateDiff = function(oldState, newState) {
  var stateDiff = diff(oldState.toJS(), newState.toJS());
  console.log("Diff:");
  for (var change of stateDiff) {
    logChange(change);
  }
};

var logState = function (key, ref, oldState, newState) {
  console.log("");
  console.log("STATE CHANGED");
  console.log("New state:", newState.toJS());
  logStateDiff(oldState, newState);
};

var registerStateLogger = function(state) {
  state.addWatch('stateLogging', logState);
};

module.exports = registerStateLogger;
