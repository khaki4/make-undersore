const { _, bloop } = require("./lib.js");

_.some = bloop(_.constant(false), _.constant(true), _.idtt);
_.every = bloop(_.constant(true), _.constant(false), _.not);
