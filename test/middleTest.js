const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([11, 22, 33, 44, 55, 66, 77, 88, 99]), [55]);
assertArraysEqual(middle([111 ,222 ,333 , 444, 555, 666, 777, 888]), [444, 555]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);