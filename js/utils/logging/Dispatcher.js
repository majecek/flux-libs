"use strict";

var logDispatch = function (dispatch) {
  console.log("");
  console.log("DISPATCH HANDLER '" + dispatch.name + "' CALLED");
  console.log("Value:",              dispatch.value);
  console.log("Resulting state:",    dispatch.state.toJS());
};

var registerDispatcherLogger = function(dispatcher) {
  dispatcher.on('dispatch', logDispatch);
};

module.exports = registerDispatcherLogger;
