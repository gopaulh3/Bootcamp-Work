import {Customer} from '../Customer';
import {Account} from '../Account';
import {BankDetails} from '../BankDetails';

describe("defines a suite of tests for the Customer class", function () {
  test("Customer account validation", function () {
    // given
    const customer = new Customer("Hamzah Gopaul", "gphz@gmail.com", 24, "GOPAU900145YAINN","xyz.png");
    customer.bankDetailsAdded(new BankDetails("Mr Gopaul","Nationwide","1234567812345678","123"));
    // then
    expect(customer.accountInfoValid()).toBe(true);

  })
});