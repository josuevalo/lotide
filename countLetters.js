const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const countLetters = function(string) {
  let result = {};
  for (let str of string) {
    if (str !== " ") {
      if (result[str]) {
        result[str] += 1;
      } else {
        result[str] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
