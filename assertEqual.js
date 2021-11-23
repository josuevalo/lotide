const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`✅✅✅ Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("Bootcamp Day 1", "Bootcamp Day 1");
assertEqual("LIGHTHOUSE", "lighthouse");
assertEqual(12345678, 12345678);
assertEqual(9877654321, 987654321);