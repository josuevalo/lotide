const middle = function(array) {
  let median = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[median - 1] , array[median]];
  } else {
    return [array[median]];
  }
};

module.exports = middle;