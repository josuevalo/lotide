const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  const words = ["Yo Yo", "Lighthouse", "Labs"]
  const empty = tail([]);

  it("returns 'Hello' for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(result.length, 2, "Hello");
  });

  it("ensures first element is 'Lighthouse'", () => {
    assert.deepEqual(result[0], "Lighthouse");
  });

  it("ensures second element is 'Labs'", () => {
    assert.deepEqual(result[1], "Labs");
  });

  it("returns 3 elements", () => {
    assert.deepEqual(words.length, 3);
  });
  
  it("checks if array is empty", () => {
    assert.deepEqual(empty.length, 0);
  });
});
