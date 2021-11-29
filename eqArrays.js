const eqArrays = function(array1, array2) {
  let value = true;
  if (array1.length !== array2.length){
    value = false
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      value = false;
    }
  }
  return value;
};

module.exports = eqArrays;
