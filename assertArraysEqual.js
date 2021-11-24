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

// TEST CODE //
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(["hello",2,3],[1,2,3]);