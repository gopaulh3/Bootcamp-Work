import { Account } from "./Account";
import { Validator } from "./Validator";
import {BankDetails} from "./BankDetails";
import { CustomerService } from "./CustomerService";
import { Scooter } from "./Scooter";

export class Customer implements Account {
  fullName: string;
  emailAddress: string;
  age: Number;
  driversNo: string;
  driversImageURL: string;
  bankDetails: BankDetails;

  constructor(fullName: string, emailAddress: string, age: Number, driversNo: string, driversImageURL : string) {
    this.fullName = fullName;
    this.emailAddress = emailAddress;
    this.age = age;
    this.driversNo = driversNo;
    this.driversImageURL = driversImageURL;
    this.bankDetails = new BankDetails("","","","");
  }

  accountInfoValid() : boolean {
    return (Validator.isValidEmail(this.emailAddress) && Validator.isValidName(this.fullName) &&
     Validator.isOver18(this.age) && CustomerService.isDriversLicenseVerified(this));
  }

  bankDetailsAdded(bankDetails: BankDetails) : boolean {
    if (CustomerService.isBankDetailsVerified(bankDetails)) {
      this.bankDetails = bankDetails;
      return true;
    } else {
      return false
    }
  }
}


