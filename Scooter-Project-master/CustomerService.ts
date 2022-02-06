import { Account } from "./Account";
import { BankDetails } from "./BankDetails";
import { Customer } from "./Customer";
import { Validator } from "./Validator";

export class CustomerService {

  static isBankDetailsVerified(bankDetails: BankDetails) {
    return Validator.isValidBank(bankDetails.bankName) && Validator.isValidCardNumber(bankDetails.cardNumber)
    && Validator.isValidCvv(bankDetails.cvv) && Validator.isValidName(bankDetails.fullName);
  }

  static isDriversLicenseVerified(customer : Customer): boolean {
    return Validator.isValidDriversNo(customer.driversNo) && customer.driversImageURL === "xyz.png";
  }

  static async takePayment(){
    // console.log("Taking payment...");
    // await new Promise(resolve => setTimeout(resolve, 10000)); // wait 2 seconds
    console.log("Thank you for riding the scooter!");
  }
}
