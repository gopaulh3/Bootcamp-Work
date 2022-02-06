const Bag = require("./Bag");

class Passenger {
  name;
  passportNumber;
  seatNumber;
  bags = [];

  constructor(name, passportNumber, seatNumber) {
    this.name = name;
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
  }

  addBag(bag) {
    if (!bag.isOverLimit()) {
      this.bags.push(bag);
      return true;
    } else {
      return false;
    }
  }
}

const mandy = new Passenger();
const mandyBag = new Bag(21);
const ucheBag = new Bag(12);
mandy.addBag(mandyBag);

console.log(mandy.bags);

module.exports = Passenger;
