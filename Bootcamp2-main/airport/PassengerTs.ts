const Bag = require("./Bag");
import { Bag } from "./Bag.js";

class Passenger {
  name: string;
  passportNumber: number;
  seatNumber: number;
  bags: [] = [];

  constructor(name: string, passportNumber: number, seatNumber: number) {
    this.name = name;
    this.passportNumber = passportNumber;
    this.seatNumber = seatNumber;
  }

  addBag(bag: Bag) {
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
