import { Account } from "../Account";
import { BankDetails } from "../BankDetails";
import { GPSCoordinates } from "../GPSCoordinates";
import { CustomerService } from "../CustomerService";

describe("defines a suite of tests for the GPSCoordinates class", function () {
  test("Check mapping coordinates into array", function () {
    // given
    const map = new GPSCoordinates();
    map.mapCoordinates();
    // then
    expect(map.mapAreaCoordinates.length).toBe(5);
  })
});