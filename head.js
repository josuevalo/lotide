const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};



const head = function(arguement1, arguement2) {
  return arguement1[0]
}

// TEST CODE //
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([8]), 8);
assertEqual(head([]), "Hello");