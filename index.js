const { _, bloop } = require("./lib.js");

_.reduce = bloop(_.noop, _.noop, undefined, true);

console.log(_.reduce([1, 2, 3], (memo, val) => memo + val, 0));
