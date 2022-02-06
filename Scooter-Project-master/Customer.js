"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Validator_1 = require("./Validator");
var BankDetails_1 = require("./BankDetails");
var CustomerService_1 = require("./CustomerService");
var Customer = /** @class */ (function () {
    function Customer(fullName, emailAddress, age, driversNo, driversImageURL) {
        this.fullName = fullName;
        this.emailAddress = emailAddress;
        this.age = age;
        this.driversNo = driversNo;
        this.driversImageURL = driversImageURL;
        this.bankDetails = new BankDetails_1.BankDetails("", "", "", "");
    }
    Customer.prototype.accountInfoValid = function () {
        return (Validator_1.Validator.isValidEmail(this.emailAddress) && Validator_1.Validator.isValidName(this.fullName) &&
            Validator_1.Validator.isOver18(this.age) && CustomerService_1.CustomerService.isDriversLicenseVerified(this));
    };
    Customer.prototype.bankDetailsAdded = function (bankDetails) {
        if (CustomerService_1.CustomerService.isBankDetailsVerified(bankDetails)) {
            this.bankDetails = bankDetails;
            return true;
        }
        else {
            return false;
        }
    };
    return Customer;
}());
exports.Customer = Customer;
