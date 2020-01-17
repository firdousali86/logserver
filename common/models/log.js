"use strict";

module.exports = function(Log) {
  Log.clearall = function(cb) {
    Log.destroyAll();
    cb();
  };

  Log.remoteMethod("clearall", {
    http: { path: "/clearAll", verb: "get" }
  });
};
