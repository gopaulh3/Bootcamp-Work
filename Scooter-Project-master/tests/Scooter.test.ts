import { Scooter } from '../Scooter';


describe("defines a suite of tests for the Scooter class", function () {
  test("Check if scooter is fully charged", function () {
    // given
    const scooter = new Scooter();
    // then
    expect(scooter.isFullyCharged()).toBe(true);
    expect(scooter.speedInMPH).toBe(20);

  })
});