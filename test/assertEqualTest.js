const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(1,1);
assertEqual("Bootcamp Day 1", "Bootcamp Day 1");
assertEqual(12345678, 12345678);
assertEqual("LIGHTHOUSE", "lighthouse");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(9877654321, 987654321);
assertEqual([1,2,3], [1,2,3])

module.exports = assertEqual;