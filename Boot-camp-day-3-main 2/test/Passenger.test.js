const Traveller = require("../Traveller");
const Bag = require("../Bag");
const Passenger = require("../Passenger");

describe("defines a suite of tests for the Passenger class", () => {
  test("Able to add bag due to under limit", () => {
    const mandysBag = new Bag(19);
    const mandy = new Passenger(
      "Mandy",
      [mandysBag, new Bag(21)],
      328392,
      132123
    );

    expect(mandy.bags).toContain(mandysBag);
  });

  test("Unable to add bag due to over limit", () => {
    const candysBag = new Bag(49);
    const candy = new Passenger("Candy", [candysBag], 328392, 132123);
    expect(candy.bags).not.toContain(candysBag);
  });
});
