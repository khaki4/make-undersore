const { _, bloop } = require("./lib.js");

_.find = bloop(_.noop, _.rester(_.idtt, 2), _.idtt);
_.findIdx = bloop(_.constant(-1), _.rester(_.idtt, 3), _.idtt);
_.findKey = bloop(_.noop, _.rester(_.idtt, 3), _.idtt);

const user = { id: 4, name: "kevin" };
console.log(_.findKey(user, v => typeof v === "string"));
