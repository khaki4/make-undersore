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