const Bag = require("../Bag");

describe("defines a suite of tests for the Bag class", function () {
  test("has correct weight", function () {
    // given
    const mandysBag = new Bag(13);

    // then
    expect(mandysBag.weight).toBe(13);
  });

  test("Is the bag under the limit test", () => {
    const mandysBag = new Bag(21);

    expect(mandysBag.weight).toBeLessThan(24);
    expect(mandysBag.isOverLimit()).toBe(false);
  });

  test("Is the bag over the limit test", () => {
    const mandysBag = new Bag(25);

    expect(mandysBag.weight).toBeGreaterThan(24);
    expect(mandysBag.isOverLimit()).toBe(true);
  });
});
