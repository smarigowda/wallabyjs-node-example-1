module.exports = function() {
  return {
    files: ["src/lib/**/*.js"],

    tests: ["src/test/**/*Spec.js"],

    setup: function() {
      global.expect = require("chai").expect;
    },

    env: {
      type: "node",
      runner: "node"
    }
  };
};
