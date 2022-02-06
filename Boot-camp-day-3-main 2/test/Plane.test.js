const Traveller = require("../Traveller");
const Bag = require("../Bag");
const Passenger = require("../Passenger");
const CrewMember = require("../CrewMember");
const Plane = require("../Plane");

describe("defines a suite of tests for the Plane class", () => {
  test("Able to board", () => {
    const mandy = new Passenger(
      "Mandy Candy",
      [new Bag(5), new Bag(10)],
      328392,
      132123
    );
    const plane = new Plane("Virgin Galactic");
    plane.board(mandy);

    expect(plane.boarded).toContain(mandy);
  });

  test("Able to board with no luggage", () => {
    const mandy = new Passenger("Handy Dandy", [], 328392, 132123);
    const plane = new Plane("Arab Emirates");
    plane.board(mandy);

    expect(plane.boarded).toContain(mandy);
  });
});
