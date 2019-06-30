const _ = {};

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
const getLength = list => (list == null ? void 0 : list.length);
const isArrayLike = list => {
  const length = getLength(list);
  return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};

_.identity = v => v;
_.idtt = _.identity;
_.array = () => [];
_.push_to = (val, obj) => (obj.push(val), val);
_.noop = () => {};

const bloop = (new_data, body) => (data, iteratee) => {
  const result = new_data(data);
  if (isArrayLike(data)) {
    for (let i = 0, len = data.length; i < len; i++) {
      body(iteratee(data[i], i, data), result);
    }
  } else {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        body(iteratee(data[key], key, data), result);
      }
    }
  }
  return result;
};
/**
 * {}, [], arguments, ArrayLike 를 인자로 받는 함수
 */
// _.map = function(data, iteratee) {
//   const new_list = [];
//   if (isArrayLike(data)) {
//     for (let i = 0, len = data.length; i < len; i++) {
//       new_list.push(iteratee(data[i], i, data));
//     }
//   } else {
//     for (const key in data) {
//       if (data.hasOwnProperty(key)) {
//         new_list.push(iteratee(data[key], key, data));
//       }
//     }
//   }
//   return new_list;
// };

// _.each = function(data, iteratee) {
//   if (isArrayLike(data)) {
//     for (let i = 0, len = data.length; i < len; i++) {
//       iteratee(data[i], i, data);
//     }
//   } else {
//     for (const key in data) {
//       if (data.hasOwnProperty(key)) {
//         iteratee(data[key], key, data);
//       }
//     }
//   }
//   return data;
// };


_.map = bloop(_.array, _.push_to);
_.each = bloop(_.idtt, _.noop);
_.values = function(list) {
  return _.map(list, _.identity);
};
