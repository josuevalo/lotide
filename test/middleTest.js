const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it("returns an empty array for 1 element in array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array if only 2 elements in the array", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns two elements in arrays that are even and more than 2", () => {
    assert.deepEqual(middle([111 ,222 ,333 , 444, 555, 666, 777, 888]), [444, 555]);
  });

  it("returns the middle element in an array with odd numbers and more than 1", () => {
    assert.deepEqual(middle([11, 22, 33, 44, 55, 66, 77, 88, 99]), [55]);
  });
  
  it("retuns the middle 2 elements in an array with even number of elements", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});




