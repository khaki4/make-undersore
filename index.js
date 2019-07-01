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
_.idtt = _.identity;
_.array = () => [];
_.push_to = (val, obj) => (obj.push(val), val);
_.noop = () => {
};
_.isObject = (obj) => {
  const type = typeof obj;
  return type === 'function' || type === 'object' && obj;
};
_.keys = (obj) => _.isObject(obj) ? Object.keys(obj) : [];
_.map = bloop(_.array, _.push_to);
_.filter = (data, predicate) => {
  const res = [];
  _.each(data, (value, idx, data) => {
    if (predicate(value)) res.push(value);
  });
  return res;
};
_.filter = bloop(_.array, (bool, res, val) => {
  if (bool) res.push(val);
});
_.each = bloop(_.idtt, _.noop);
_.values = (list) => _.map(list, _.identity);


console.log(_.filter({ a: 1, b: 2 }, v => v < 2))
console.log(_.filter([1,2,3], v => v < 2))