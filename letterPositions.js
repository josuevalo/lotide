const letterPositions = function(sentence) {
  const result = {};
  for (let sent of sentence) {
    if (sent !== " ") {
      if (result[sent]) {
        result[sent] += 1;
      } else {
        result[sent] = 1;
      }
    }
  }
  return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  let value = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      value = false;
    }
  }
  return value;
};



assertArraysEqual(letterPositions("hello").e, [1]);