const _ = {};

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
const getLength = list => (list == null ? void 0 : list.length);
const isArrayLike = list => {
  const length = getLength(list);
  return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};
const bloop = (new_data, body) => (data, iteratee) => {
  const result = new_data(data);
  if (isArrayLike(data)) {
    for (let i = 0, len = data.length; i < len; i++) {
      body(iteratee(data[i], i, data), result);
    }
  } else {
    for (let i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
      body(iteratee(data[keys[i]], keys[i], data), result);
    }
  }
  return result;
};

_.identity = v => v;
_.idtt = _.identity;
_.array = () => [];
_.push_to = (val, obj) => (obj.push(val), val);
_.noop = () => {};
_.isObject = (obj) => {
  const type = typeof obj;
  return type === 'function' || type === 'object' && obj;
};
_.keys = (obj) => _.isObject(obj) ? Object.keys(obj) : [];
_.map = bloop(_.array, _.push_to);
_.each = bloop(_.idtt, _.noop);
_.values = (list) => _.map(list, _.identity);


