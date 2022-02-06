import {BankDetails} from '../BankDetails';

describe("defines a suite of tests for the BankDetails class", function () {
  test("Can retrieve full name, bank card no, and bank name", function () {
    // given
    const bankDetails = new BankDetails("Hamzah Gopaul","Nat","1222","444");

    // then
    expect(bankDetails.fullName).toBe("Hamzah Gopaul");
    expect(bankDetails.bankName).toBe("Nat");
    expect(bankDetails.cardNumber).toBe("1222");
    expect(bankDetails.cvv).toBe("444");
  })
});