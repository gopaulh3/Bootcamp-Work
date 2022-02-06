const Traveller = require("../Traveller");
const Bag = require("../Bag");

describe("defines a suite of tests for the Traveller class", () => {
  test("Able to add bag due to under limit", () => {
    const bg = new Bag(19);
    const traveller = new Traveller("Mandy", [new Bag(18), bg]);

    expect(traveller.bags).toContain(bg);
  });

  test("Unable to add bag due to over limit", () => {
    const bg = new Bag(25);
    const traveller = new Traveller("Candy", [bg, new Bag(15)]);

    expect(traveller.bags).not.toContain(bg);
  });

  test("Check if luggage is undefined", () => {
    const traveller = new Traveller("Candy", []);

    expect(traveller.bags.length).toBe(0);
  });
});
