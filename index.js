const { _, bloop } = require('./lib.js');

_.find = bloop(_.noop, _.rester(_.idtt, 2), _.idtt);
_.findIdx = bloop(_.constant(-1), _.rester(_.idtt, 3), _.idtt);
_.findKey = bloop(_.noop, _.rester(_.idtt, 3), _.idtt);

const user = [{ age: 25 }, { age: 55 }, { age: 57 }]
console.log(_.findKey(user, (v) => {
  return v.age >= 25;
}))
