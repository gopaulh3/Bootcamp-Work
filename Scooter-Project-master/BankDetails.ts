export class BankDetails {
  fullName: string;
  bankName: string;
  cardNumber: string;
  cvv: string;

  constructor(fullName: string, bankName: string, cardNumber: string, cvv: string) {
    this.fullName = fullName;
    this.bankName = bankName;
    this.cardNumber = cardNumber;
    this.cvv = cvv;
  }
}
