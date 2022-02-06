const Traveller = require("../Traveller");
const Bag = require("../Bag");
const CrewMember = require("../CrewMember");

describe("defines a suite of tests for the CrewMember class", () => {
  test("Able to add bag due to under limit", () => {
    const mandysBag = new Bag(19);
    const mandy = new CrewMember(
      "Mandy Candy",
      [mandysBag, new Bag(12)],
      "Pilot",
      839221
    );

    expect(mandy.bags).toContain(mandysBag);
  });

  test("Able to add bag due to under limit", () => {
    const candysBag = new Bag(49);
    const candy = new CrewMember(
      "Candy Mandy",
      [candysBag],
      "Stewardess",
      839221
    );

    expect(candy.bags).not.toContain(candysBag);
  });

  test("Check if name, position and staffNumber are truthy", () => {
    const candy = new CrewMember("", "", undefined);

    expect(candy.staffNumber).not.toBeDefined;
    expect(candy.name).not.toBeTruthy;
  });
});
