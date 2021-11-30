const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = function(array1, array2) {
  let value = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      value = false;
    }
  }
  return value;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


assertArraysEqual(map([1,2,3,4,5,6], x => x * 2), [2, 4, 6, 8, 10, 12]);
assertArraysEqual(map([1,2,3,4,5,6], x => x - 1), [0, 1, 2, 3, 4, 5]);
assertArraysEqual(map(["hello","goodbye","nice", "to", "meet", "you"], x => x.toUpperCase()), ["HELLO", "GOODBYE", "NICE", "TO", "MEET", "YOU"]);


module.exports = map;