import {Customer} from '../Customer';
import {Account} from '../Account';
import {ScooterHire} from '../ScooterHire';
import {Scooter} from '../Scooter';
import {BankDetails} from '../BankDetails';
import { CustomerService } from "../CustomerService";
import { GPSCoordinates } from "../GPSCoordinates";
import { Validator } from "../Validator";

describe("defines a suite of tests for the ScooterHire class", function () {
  test("Scooter retrieval success", function () {
    // given
    const customer = new Customer("Hamzah Gopaul", "gphz@gmail.com", 24, "GOPAU900145YAINN","xyz.png");
    customer.bankDetailsAdded(new BankDetails("Mr Gopaul","Nationwide","1234567812345678","123"));
    const scooterHire = new ScooterHire(customer);
    expect(scooterHire.scootersAvailable.length).toBe(5);
    expect(scooterHire.retrieveScooterSuccessful()).toBe(true);
    expect(scooterHire.scootersAvailable.length).toBe(4);
  })
});