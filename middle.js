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

/*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
For arrays with one or two elements, there is no middle. Return an empty array
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements, an array containing the two elements in the middle should be returned
//return array[Math.floor(array.length/2)];
*/

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3,4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([11, 22, 33, 44, 55, 66, 77, 88, 99]), [55]);
assertArraysEqual(middle([111 ,222 ,333 , 444, 555, 666, 777, 888]), [444, 555]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);