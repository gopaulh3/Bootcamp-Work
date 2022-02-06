export class Validator {

  private static validateEmail : RegExp = new RegExp(/^([a-zd.-]+)@([a-zd-]+).([a-z]{2,8})(.[a-z]{2,8})?$/);
  private static validateDriverNo : RegExp = new RegExp(/[A-Z]{2,5}[0-9]{6,9}/);
  private static validateName : RegExp = new RegExp(/^([\w]{2,})+\s+([\w\s]{3,})+$/i);
  private static validBanks : string[] = ["Santander","Natwest","Nationwide","HSBC","Barclays",];
  private static validCardNumber : RegExp = new RegExp(/[0-9]/);

  static isValidName(name: string) {
    return Validator.validateName.test(name);
  }

  static isValidCardNumber(cardNumber: string) {
    return (Validator.validCardNumber.test(cardNumber) && cardNumber.length === 16);
  }

  static isValidCvv(cardCvv: string) {
    return Validator.validCardNumber.test(cardCvv) && cardCvv.length === 3;
  }

  static isValidBank(bankName: string) {
    return Validator.validBanks.indexOf(bankName) !== -1;
  }

  static isOver18(age: Number): boolean {
    return age >= 18;
  }

  static isValidDriversNo(driversNo: string): boolean {
    // console.log(`Criteria 1 : ${Validator.validateDriverNo.test(driversNo)}`);
    // console.log(`Criteria 2 : ${driversNo.length === 16}`);
    return (Validator.validateDriverNo.test(driversNo) && driversNo.length === 16);
  }

  static isValidEmail(email: string): boolean {
    // console.log(`Is my email valid? => ${Validator.validateEmail.test(email)}`);
    return Validator.validateEmail.test(email);
  }
}
