const takeUntil = function(array, callback) {
  const newArray = [];
  for (let arr of array) {
    if (callback(arr)) {
      break;
    } else {
      newArray.push(arr);
    }
  }
  return newArray;

};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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

assertArraysEqual(takeUntil([1,2,3,4,5,6], x => x < 6), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(takeUntil(["Hello", "My Name is","Ricardo", "and"], x => x === "and"), ["Hello", "My Name is","Ricardo"]);

module.exports = takeUntil;