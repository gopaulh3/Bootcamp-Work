import { Account } from "../Account";
import { BankDetails } from "../BankDetails";
import { Customer } from "../Customer";
import { CustomerService } from "../CustomerService";

describe("defines a suite of tests for the CustomerService class", function () {
  test("Check isDriversLicenseVerified method", function () {
    // given
    const customer = new Customer("Hamzah Gopaul", "gphz@gmail.com", 24, "GOPAU900145YAINN","xyz.png");
    customer.bankDetailsAdded(new BankDetails("Mr Gopaul","Nationwide","1234567812345678","123"));
    // then
    expect(CustomerService.isDriversLicenseVerified(customer)).toBe(true);

  })
});