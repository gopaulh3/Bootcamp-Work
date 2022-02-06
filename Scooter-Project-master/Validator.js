"use strict";
exports.__esModule = true;
exports.Validator = void 0;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.isValidName = function (name) {
        return Validator.validateName.test(name);
    };
    Validator.isValidCardNumber = function (cardNumber) {
        return (Validator.validCardNumber.test(cardNumber) && cardNumber.length === 16);
    };
    Validator.isValidCvv = function (cardCvv) {
        return Validator.validCardNumber.test(cardCvv) && cardCvv.length === 3;
    };
    Validator.isValidBank = function (bankName) {
        return Validator.validBanks.indexOf(bankName) !== -1;
    };
    Validator.isOver18 = function (age) {
        return age >= 18;
    };
    Validator.isValidDriversNo = function (driversNo) {
        // console.log(`Criteria 1 : ${Validator.validateDriverNo.test(driversNo)}`);
        // console.log(`Criteria 2 : ${driversNo.length === 16}`);
        return (Validator.validateDriverNo.test(driversNo) && driversNo.length === 16);
    };
    Validator.isValidEmail = function (email) {
        // console.log(`Is my email valid? => ${Validator.validateEmail.test(email)}`);
        return Validator.validateEmail.test(email);
    };
    Validator.validateEmail = new RegExp(/^([a-zd.-]+)@([a-zd-]+).([a-z]{2,8})(.[a-z]{2,8})?$/);
    Validator.validateDriverNo = new RegExp(/[A-Z]{2,5}[0-9]{6,9}/);
    Validator.validateName = new RegExp(/^([\w]{2,})+\s+([\w\s]{3,})+$/i);
    Validator.validBanks = ["Santander", "Natwest", "Nationwide", "HSBC", "Barclays",];
    Validator.validCardNumber = new RegExp(/[0-9]/);
    return Validator;
}());
exports.Validator = Validator;
