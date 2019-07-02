const _ = {};

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
const getLength = list => (list == null ? void 0 : list.length);
const isArrayLike = list => {
  const length = getLength(list);
  return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};
const bloop = (new_data, body) => (data, iter_predi) => {
  const result = new_data(data);
  if (isArrayLike(data)) {
    for (let i = 0, len = data.length; i < len; i++) {
      body(iter_predi(data[i], i, data), result, data[i]);
    }
  } else {
    for (let i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
      body(iter_predi(data[keys[i]], keys[i], data), result, data[keys[i]]);
    }
  }
  return result;
};

_.identity = v => v;
_.not = v => !v;
_.idtt = _.identity;
_.array = () => [];
_.push_to = (val, obj) => (obj.push(val), val);
_.push = (obj, val) => (obj.push(val), obj);
_.noop = () => {
};
_.negate = (func) => (...args) => !func(...args);
_.isObject = (obj) => {
  const type = typeof obj;
  return type === 'function' || type === 'object' && obj;
};
_.keys = (obj) => _.isObject(obj) ? Object.keys(obj) : [];
_.map = bloop(_.array, _.push_to);
// _.filter = (data, predicate) => {
//   const res = [];
//   _.each(data, (value, idx, data) => {
//     if (predicate(value)) res.push(value);
//   });
//   return res;
// };
// _.filter = bloop(_.array, (bool, res, val) => {
//   if (bool) res.push(val);
// });
_.each = bloop(_.idtt, _.noop);
_.values = (list) => _.map(list, _.identity);
_.rest = (list, num) => _.toArray(list).slice(num || 1);
_.rester = (func, num) => (...args) => func.apply(null, _.rest(args, num));
_.toArray = (list) => Array.isArray(list) ? list : _.values(list);
_.if = (validator, func, alter) => (...args) => validator.apply(null, args) ? func(...args) : alter && alter(...args);
_.toArray2 = _.if(Array.isArray, _.idtt, _.values);
_.reverse = (list) => _.toArray(list).reverse();

_.safety = _.with_validator = _.if;
_.constant = (v) => () => v;
_.isNumber = (a) => toString.call(a) === '[object Number]';
_.filter = bloop(_.array, _.if(_.idtt, _.rester(_.push)));
// 1
// _.reject = bloop(_.array, _.if(_.idtt, _.noop, _.rester(_.push)));

// 2
// _.reject = bloop(_.array, _.if(_.negate(_.idtt), _.rester(_.push)));
_.reject = bloop(_.array, _.if(_.not, _.rester(_.push)));
